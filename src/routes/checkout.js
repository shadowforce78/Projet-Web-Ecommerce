const express = require('express');
const router = express.Router();
const db = require('../config/database');

// Formulaire checkout
router.get('/', (req, res) => {
  const cart = req.session.cart || [];
  if (cart.length === 0) {
    return res.redirect('/cart');
  }

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  res.render('checkout', {
    title: 'Checkout — MONOLITH',
    cart,
    total,
    user: req.session.user || null
  });
});

// Passer la commande
router.post('/place-order', async (req, res) => {
  const cart = req.session.cart || [];
  if (cart.length === 0) {
    return res.redirect('/cart');
  }

  try {
    const { first_name, last_name, email, address, department, country, payment_method } = req.body;
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Créer la commande
    const [orderResult] = await db.query(
      `INSERT INTO orders (user_id, first_name, last_name, email, shipping_address, shipping_department, shipping_country, status, total_amount, created_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, 'pending', ?, NOW())`,
      [
        req.session.user ? req.session.user.id : null,
        first_name, last_name, email, address, department || '', country,
        total
      ]
    );

    const orderId = orderResult.insertId;

    // Ajouter les items
    for (const item of cart) {
      const [itemResult] = await db.query(
        `INSERT INTO order_items (order_id, product_id, product_name_snapshot, quantity, unit_price)
         VALUES (?, ?, ?, ?, ?)`,
        [orderId, item.product_id, item.name, item.quantity, item.price]
      );

      // Ajouter les options des items
      if (item.options && item.options.length > 0) {
        for (const opt of item.options) {
          await db.query(
            'INSERT INTO order_item_option_values (order_item_id, option_value_id) VALUES (?, ?)',
            [itemResult.insertId, opt.id]
          );
        }
      }
    }

    // Créer le paiement
    await db.query(
      `INSERT INTO payments (order_id, method, amount, status, created_at)
       VALUES (?, ?, ?, 'pending', NOW())`,
      [orderId, payment_method || 'cb', total]
    );

    // Vider le panier
    req.session.cart = [];

    res.redirect(`/checkout/success/${orderId}`);
  } catch (error) {
    console.error('Erreur commande:', error);
    res.redirect('/checkout');
  }
});

// Confirmation de commande
router.get('/success/:id', async (req, res) => {
  try {
    const [orders] = await db.query('SELECT * FROM orders WHERE id = ?', [req.params.id]);
    if (orders.length === 0) {
      return res.redirect('/');
    }

    const order = orders[0];

    const [items] = await db.query(
      `SELECT oi.*, p.image_url FROM order_items oi
       LEFT JOIN products p ON oi.product_id = p.id
       WHERE oi.order_id = ?`,
      [order.id]
    );

    res.render('order-success', {
      title: 'Commande Confirmée — MONOLITH',
      order,
      items
    });
  } catch (error) {
    console.error('Erreur confirmation:', error);
    res.redirect('/');
  }
});

module.exports = router;
