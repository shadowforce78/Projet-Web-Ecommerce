const Database = require('../config/database');

/**
 * Modèle pour la gestion des produits.
 * Encapsule toutes les requêtes SQL liées aux tables `products`, `product_option_values`, etc.
 */
class ProductModel {
  constructor() {
    this.db = Database.getInstance();
  }

  /**
   * Récupère les produits avec filtres optionnels.
   * @param {Object} filters - { category, sort, search }
   * @returns {Promise<Array>}
   */
  async findAll(filters = {}) {
    let query = `
      SELECT p.*, c.name as category_name, c.slug as category_slug
      FROM products p
      JOIN categories c ON p.category_id = c.id
      WHERE p.is_active = true
    `;
    const params = [];

    if (filters.category) {
      query += ' AND c.slug = ?';
      params.push(filters.category);
    }

    if (filters.search) {
      query += ' AND (p.name LIKE ? OR p.description LIKE ?)';
      params.push(`%${filters.search}%`, `%${filters.search}%`);
    }

    switch (filters.sort) {
      case 'price_asc':
        query += ' ORDER BY p.base_price ASC';
        break;
      case 'price_desc':
        query += ' ORDER BY p.base_price DESC';
        break;
      case 'name':
        query += ' ORDER BY p.name ASC';
        break;
      default:
        query += ' ORDER BY p.created_at DESC';
    }

    const [products] = await this.db.query(query, params);
    return products;
  }

  /**
   * Récupère un produit par son ID.
   * @param {number} id
   * @returns {Promise<Object|null>}
   */
  async findById(id) {
    const [products] = await this.db.query(
      'SELECT p.*, c.name as category_name FROM products p JOIN categories c ON p.category_id = c.id WHERE p.id = ?',
      [id]
    );
    return products.length > 0 ? products[0] : null;
  }

  /**
   * Récupère un produit actif par son ID.
   * @param {number} id
   * @returns {Promise<Object|null>}
   */
  async findActiveById(id) {
    const [products] = await this.db.query(
      'SELECT * FROM products WHERE id = ? AND is_active = true',
      [id]
    );
    return products.length > 0 ? products[0] : null;
  }

  /**
   * Récupère les options groupées d'un produit.
   * @param {number} productId
   * @returns {Promise<Object>} Options groupées par nom de groupe
   */
  async getOptions(productId) {
    const [options] = await this.db.query(`
      SELECT og.name as group_name, ov.id as option_id, ov.value, ov.extra_price
      FROM product_option_values pov
      JOIN option_values ov ON pov.option_value_id = ov.id
      JOIN option_groups og ON ov.option_group_id = og.id
      WHERE pov.product_id = ?
      ORDER BY og.name, ov.value
    `, [productId]);

    const optionGroups = {};
    options.forEach(opt => {
      if (!optionGroups[opt.group_name]) {
        optionGroups[opt.group_name] = [];
      }
      optionGroups[opt.group_name].push(opt);
    });

    return optionGroups;
  }

  /**
   * Récupère les produits recommandés pour un produit.
   * @param {number} productId
   * @param {number} limit
   * @returns {Promise<Array>}
   */
  async getRecommended(productId, limit = 4) {
    const [recommended] = await this.db.query(`
      SELECT p.*, c.name as category_name
      FROM product_recommendations pr
      JOIN products p ON pr.recommended_product_id = p.id
      JOIN categories c ON p.category_id = c.id
      WHERE pr.product_id = ? AND p.is_active = true
      ORDER BY pr.rank
      LIMIT ?
    `, [productId, limit]);

    return recommended;
  }

  /**
   * Récupère les produits populaires (derniers actifs).
   * @param {number} limit
   * @returns {Promise<Array>}
   */
  async getPopular(limit = 8) {
    const [products] = await this.db.query(
      'SELECT p.*, c.name as category_name FROM products p JOIN categories c ON p.category_id = c.id WHERE p.is_active = true ORDER BY p.created_at DESC LIMIT ?',
      [limit]
    );
    return products;
  }

  /**
   * Décrémente le stock d'un produit.
   * Utilisé uniquement lorsqu'une commande est confirmée/payée.
   * @param {number} productId
   * @param {number} quantity - Quantité à retirer du stock
   * @returns {Promise<Object>} Résultat de la mise à jour
   */
  async decrementStock(productId, quantity) {
    const [result] = await this.db.query(
      'UPDATE products SET stock = stock - ? WHERE id = ? AND stock >= ?',
      [quantity, productId, quantity]
    );
    return result;
  }

  /**
   * Met à jour le stock d'un produit (valeur absolue).
   * Utilisé par l'interface admin.
   * @param {number} productId
   * @param {number} stock - Nouvelle valeur de stock
   * @returns {Promise<Object>} Résultat de la mise à jour
   */
  async updateStock(productId, stock) {
    const [result] = await this.db.query(
      'UPDATE products SET stock = ? WHERE id = ?',
      [stock, productId]
    );
    return result;
  }

  /**
   * Récupère tous les produits pour l'administration (avec tri flexible).
   * @param {Object} options - { sort, search }
   * @returns {Promise<Array>}
   */
  async findAllAdmin(options = {}) {
    let query = `
      SELECT p.*, c.name as category_name
      FROM products p
      JOIN categories c ON p.category_id = c.id
      WHERE 1=1
    `;
    const params = [];

    if (options.search) {
      query += ' AND (p.name LIKE ? OR p.description LIKE ?)';
      params.push(`%${options.search}%`, `%${options.search}%`);
    }

    switch (options.sort) {
      case 'stock_asc':
        query += ' ORDER BY p.stock ASC, p.name ASC';
        break;
      case 'stock_desc':
        query += ' ORDER BY p.stock DESC, p.name ASC';
        break;
      case 'name_asc':
        query += ' ORDER BY p.name ASC';
        break;
      case 'name_desc':
        query += ' ORDER BY p.name DESC';
        break;
      case 'price_asc':
        query += ' ORDER BY p.base_price ASC';
        break;
      case 'price_desc':
        query += ' ORDER BY p.base_price DESC';
        break;
      default:
        query += ' ORDER BY p.stock ASC, p.name ASC';
    }

    const [products] = await this.db.query(query, params);
    return products;
  }

  /**
   * Compte le nombre total de produits.
   * @returns {Promise<number>}
   */
  async countAll() {
    const [rows] = await this.db.query('SELECT COUNT(*) as count FROM products');
    return rows[0].count;
  }

  /**
   * Compte les produits en stock faible (≤ 10).
   * @returns {Promise<number>}
   */
  async countLowStock() {
    const [rows] = await this.db.query('SELECT COUNT(*) as count FROM products WHERE stock <= 10');
    return rows[0].count;
  }

  /**
   * Compte les produits en rupture de stock (= 0).
   * @returns {Promise<number>}
   */
  async countOutOfStock() {
    const [rows] = await this.db.query('SELECT COUNT(*) as count FROM products WHERE stock = 0');
    return rows[0].count;
  }
}

module.exports = ProductModel;

