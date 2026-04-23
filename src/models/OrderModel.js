const Database = require('../config/database');

/**
 * Modèle pour la gestion des commandes.
 * Encapsule toutes les requêtes SQL liées aux tables `orders`, `order_items`, `payments`.
 */
class OrderModel {
  constructor() {
    this.db = Database.getInstance();
  }

  /**
   * Crée une nouvelle commande.
   * @param {Object} data - { userId, firstName, lastName, email, address, department, country, total }
   * @returns {Promise<Object>} Résultat de l'insertion (contient insertId)
   */
  async create(data) {
    const [result] = await this.db.query(
      `INSERT INTO orders (user_id, first_name, last_name, email, shipping_address, shipping_department, shipping_country, status, total_amount, created_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, 'pending', ?, NOW())`,
      [
        data.userId,
        data.firstName,
        data.lastName,
        data.email,
        data.address,
        data.department || '',
        data.country,
        data.total
      ]
    );
    return result;
  }

  /**
   * Ajoute un article à une commande.
   * @param {number} orderId
   * @param {Object} item - { product_id, name, quantity, price }
   * @returns {Promise<Object>} Résultat de l'insertion (contient insertId)
   */
  async addItem(orderId, item) {
    const [result] = await this.db.query(
      `INSERT INTO order_items (order_id, product_id, product_name_snapshot, quantity, unit_price)
       VALUES (?, ?, ?, ?, ?)`,
      [orderId, item.product_id, item.name, item.quantity, item.price]
    );
    return result;
  }

  /**
   * Ajoute les options d'un article de commande.
   * @param {number} orderItemId
   * @param {Array} options - Tableau d'options avec { id }
   */
  async addItemOptions(orderItemId, options) {
    for (const opt of options) {
      await this.db.query(
        'INSERT INTO order_item_option_values (order_item_id, option_value_id) VALUES (?, ?)',
        [orderItemId, opt.id]
      );
    }
  }

  /**
   * Crée un paiement pour une commande.
   * @param {number} orderId
   * @param {string} method
   * @param {number} amount
   */
  async createPayment(orderId, method, amount) {
    await this.db.query(
      `INSERT INTO payments (order_id, method, amount, status, created_at)
       VALUES (?, ?, ?, 'pending', NOW())`,
      [orderId, method || 'cb', amount]
    );
  }

  /**
   * Recherche une commande par ID.
   * @param {number} id
   * @returns {Promise<Object|null>}
   */
  async findById(id) {
    const [orders] = await this.db.query('SELECT * FROM orders WHERE id = ?', [id]);
    return orders.length > 0 ? orders[0] : null;
  }

  /**
   * Recherche une commande par ID et user ID (vérification propriétaire).
   * @param {number} id
   * @param {number} userId
   * @returns {Promise<Object|null>}
   */
  async findByIdAndUser(id, userId) {
    const [orders] = await this.db.query(
      'SELECT * FROM orders WHERE id = ? AND user_id = ?',
      [id, userId]
    );
    return orders.length > 0 ? orders[0] : null;
  }

  /**
   * Récupère les commandes d'un utilisateur avec le nombre d'articles.
   * @param {number} userId
   * @returns {Promise<Array>}
   */
  async findByUserId(userId) {
    const [orders] = await this.db.query(
      `SELECT o.*, COUNT(oi.id) as item_count
       FROM orders o
       LEFT JOIN order_items oi ON o.id = oi.order_id
       WHERE o.user_id = ?
       GROUP BY o.id
       ORDER BY o.created_at DESC`,
      [userId]
    );
    return orders;
  }

  /**
   * Récupère les articles d'une commande.
   * @param {number} orderId
   * @returns {Promise<Array>}
   */
  async getItems(orderId) {
    const [items] = await this.db.query(
      `SELECT oi.*, p.image_url FROM order_items oi
       LEFT JOIN products p ON oi.product_id = p.id
       WHERE oi.order_id = ?`,
      [orderId]
    );
    return items;
  }
}

module.exports = OrderModel;
