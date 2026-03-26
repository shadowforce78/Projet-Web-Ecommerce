const express = require('express');
const router = express.Router();
const db = require('../config/database');

// Catalogue de produits
router.get('/', async (req, res) => {
  try {
    const { category, sort, search } = req.query;
    let query = `
      SELECT p.*, c.name as category_name, c.slug as category_slug
      FROM products p
      JOIN categories c ON p.category_id = c.id
      WHERE p.is_active = true
    `;
    const params = [];

    if (category) {
      query += ' AND c.slug = ?';
      params.push(category);
    }

    if (search) {
      query += ' AND (p.name LIKE ? OR p.description LIKE ?)';
      params.push(`%${search}%`, `%${search}%`);
    }

    switch (sort) {
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

    const [products] = await db.query(query, params);
    const [categories] = await db.query('SELECT * FROM categories ORDER BY name');

    res.render('products', {
      title: 'Shop — MONOLITH',
      products,
      categories,
      filters: { category, sort, search }
    });
  } catch (error) {
    console.error('Erreur catalogue:', error);
    res.render('products', { title: 'Shop — MONOLITH', products: [], categories: [], filters: {} });
  }
});

// Fiche produit
router.get('/:id', async (req, res) => {
  try {
    const [products] = await db.query(
      'SELECT p.*, c.name as category_name FROM products p JOIN categories c ON p.category_id = c.id WHERE p.id = ?',
      [req.params.id]
    );

    if (products.length === 0) {
      return res.status(404).render('404', { title: 'Produit non trouvé' });
    }

    const product = products[0];

    // Options du produit
    const [options] = await db.query(`
      SELECT og.name as group_name, ov.id as option_id, ov.value, ov.extra_price
      FROM product_option_values pov
      JOIN option_values ov ON pov.option_value_id = ov.id
      JOIN option_groups og ON ov.option_group_id = og.id
      WHERE pov.product_id = ?
      ORDER BY og.name, ov.value
    `, [req.params.id]);

    // Grouper les options
    const optionGroups = {};
    options.forEach(opt => {
      if (!optionGroups[opt.group_name]) {
        optionGroups[opt.group_name] = [];
      }
      optionGroups[opt.group_name].push(opt);
    });

    // Produits recommandés
    const [recommended] = await db.query(`
      SELECT p.*, c.name as category_name
      FROM product_recommendations pr
      JOIN products p ON pr.recommended_product_id = p.id
      JOIN categories c ON p.category_id = c.id
      WHERE pr.product_id = ? AND p.is_active = true
      ORDER BY pr.rank
      LIMIT 4
    `, [req.params.id]);

    res.render('product-detail', {
      title: `${product.name} — MONOLITH`,
      product,
      optionGroups,
      recommended
    });
  } catch (error) {
    console.error('Erreur fiche produit:', error);
    res.status(500).render('404', { title: 'Erreur' });
  }
});

module.exports = router;
