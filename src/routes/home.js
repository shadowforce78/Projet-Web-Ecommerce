const express = require('express');
const router = express.Router();
const db = require('../config/database');

// Page d'accueil
router.get('/', async (req, res) => {
  try {
    // Catégories
    const [categories] = await db.query('SELECT * FROM categories');

    // Produits populaires (les 8 derniers actifs)
    const [products] = await db.query(
      'SELECT p.*, c.name as category_name FROM products p JOIN categories c ON p.category_id = c.id WHERE p.is_active = true ORDER BY p.created_at DESC LIMIT 8'
    );

    res.render('home', {
      title: 'MONOLITH — The Architectural Boutique',
      categories,
      products
    });
  } catch (error) {
    console.error('Erreur page accueil:', error);
    res.render('home', { title: 'MONOLITH', categories: [], products: [] });
  }
});

module.exports = router;
