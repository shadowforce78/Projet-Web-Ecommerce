const ProductModel = require('../models/ProductModel');
const CartModel = require('../models/CartModel');

/**
 * Contrôleur pour la gestion du panier.
 * Gère l'affichage, l'ajout, la modification et la suppression d'articles.
 */
class CartController {
  constructor() {
    this.productModel = new ProductModel();
    this.cartModel = new CartModel();
  }

  /**
   * Affiche le panier.
   */
  show(req, res) {
    const cart = req.session.cart || [];
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    res.render('cart', {
      title: 'Panier — MONOLITH',
      cart,
      total
    });
  }

  /**
   * Ajoute un produit au panier.
   */
  async add(req, res) {
    try {
      const { product_id, quantity, options } = req.body;
      const qty = parseInt(quantity) || 1;

      const product = await this.productModel.findActiveById(product_id);
      if (!product) {
        return res.redirect('/products');
      }

      let extraPrice = 0;
      let selectedOptions = [];

      // Calculer le prix des options
      if (options) {
        const optionIds = Array.isArray(options) ? options : [options];
        if (optionIds.length > 0) {
          const optionValues = await this.cartModel.getOptionValues(optionIds);
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
  }

  /**
   * Modifie la quantité d'un article du panier.
   */
  update(req, res) {
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
  }

  /**
   * Supprime un article du panier.
   */
  remove(req, res) {
    const { index } = req.body;
    const idx = parseInt(index);

    if (req.session.cart && req.session.cart[idx]) {
      req.session.cart.splice(idx, 1);
    }

    res.redirect('/cart');
  }
}

module.exports = CartController;
