const express = require('express');
const router = express.Router();
const db = require('../config/database');
const { isAuthenticated } = require('../middleware/auth');

// Dashboard (protégé)
router.get('/', isAuthenticated, async (req, res) => {
  try {
    const [orders] = await db.query(
      `SELECT o.*, COUNT(oi.id) as item_count
       FROM orders o
       LEFT JOIN order_items oi ON o.id = oi.order_id
       WHERE o.user_id = ?
       GROUP BY o.id
       ORDER BY o.created_at DESC`,
      [req.session.user.id]
    );

    const [user] = await db.query('SELECT * FROM users WHERE id = ?', [req.session.user.id]);

    res.render('dashboard', {
      title: 'Mon Compte — MONOLITH',
      orders,
      profile: user[0]
    });
  } catch (error) {
    console.error('Erreur dashboard:', error);
    res.render('dashboard', { title: 'Mon Compte — MONOLITH', orders: [], profile: req.session.user });
  }
});

// Détail d'une commande
router.get('/order/:id', isAuthenticated, async (req, res) => {
  try {
    const [orders] = await db.query(
      'SELECT * FROM orders WHERE id = ? AND user_id = ?',
      [req.params.id, req.session.user.id]
    );

    if (orders.length === 0) return res.redirect('/dashboard');

    const [items] = await db.query(
      `SELECT oi.*, p.image_url FROM order_items oi
       LEFT JOIN products p ON oi.product_id = p.id
       WHERE oi.order_id = ?`,
      [req.params.id]
    );

    res.render('order-detail', {
      title: `Commande #${req.params.id} — MONOLITH`,
      order: orders[0],
      items
    });
  } catch (error) {
    console.error('Erreur détail commande:', error);
    res.redirect('/dashboard');
  }
});

module.exports = router;
