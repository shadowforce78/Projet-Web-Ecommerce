const express = require('express');
const router = express.Router();
const db = require('../config/database');

// Afficher le panier
router.get('/', (req, res) => {
  const cart = req.session.cart || [];
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  res.render('cart', {
    title: 'Panier — MONOLITH',
    cart,
    total
  });
});

// Ajouter au panier
router.post('/add', async (req, res) => {
  try {
    const { product_id, quantity, options } = req.body;
    const qty = parseInt(quantity) || 1;

    const [products] = await db.query('SELECT * FROM products WHERE id = ? AND is_active = true', [product_id]);
    if (products.length === 0) {
      return res.redirect('/products');
    }

    const product = products[0];
    let extraPrice = 0;
    let selectedOptions = [];

    // Calculer le prix des options
    if (options) {
      const optionIds = Array.isArray(options) ? options : [options];
      if (optionIds.length > 0) {
        const [optionValues] = await db.query(
          `SELECT ov.*, og.name as group_name FROM option_values ov
           JOIN option_groups og ON ov.option_group_id = og.id
           WHERE ov.id IN (?)`,
          [optionIds]
        );
        optionValues.forEach(ov => {
          extraPrice += parseFloat(ov.extra_price);
          selectedOptions.push({ id: ov.id, group: ov.group_name, value: ov.value });
        });
      }
    }

    if (!req.session.cart) {
      req.session.cart = [];
    }

    // Vérifier si le produit existe déjà avec les mêmes options
    const optionKey = selectedOptions.map(o => o.id).sort().join('-');
    const existingIndex = req.session.cart.findIndex(item =>
      item.product_id == product_id &&
      item.optionKey === optionKey
    );

    if (existingIndex > -1) {
      req.session.cart[existingIndex].quantity += qty;
    } else {
      req.session.cart.push({
        product_id: product.id,
        name: product.name,
        image_url: product.image_url,
        price: parseFloat(product.base_price) + extraPrice,
        quantity: qty,
        options: selectedOptions,
        optionKey
      });
    }

    res.redirect('/cart');
  } catch (error) {
    console.error('Erreur ajout panier:', error);
    res.redirect('/products');
  }
});

// Modifier quantité
router.post('/update', (req, res) => {
  const { index, quantity } = req.body;
  const idx = parseInt(index);
  const qty = parseInt(quantity);

  if (req.session.cart && req.session.cart[idx]) {
    if (qty <= 0) {
      req.session.cart.splice(idx, 1);
    } else {
      req.session.cart[idx].quantity = qty;
    }
  }

  res.redirect('/cart');
});

// Supprimer du panier
router.post('/remove', (req, res) => {
  const { index } = req.body;
  const idx = parseInt(index);

  if (req.session.cart && req.session.cart[idx]) {
    req.session.cart.splice(idx, 1);
  }

  res.redirect('/cart');
});

module.exports = router;
