const OrderModel = require('../models/OrderModel');

/**
 * Contrôleur pour le processus de checkout.
 * Gère l'affichage du formulaire, la création de commande et la confirmation.
 */
class CheckoutController {
  constructor() {
    this.orderModel = new OrderModel();
  }

  /**
   * Affiche le formulaire de checkout.
   */
  show(req, res) {
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
  }

  /**
   * Traite la création d'une commande.
   */
  async placeOrder(req, res) {
    const cart = req.session.cart || [];
    if (cart.length === 0) {
      return res.redirect('/cart');
    }

    try {
      const { first_name, last_name, email, address, department, country, payment_method } = req.body;
      const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

      // Créer la commande
      const orderResult = await this.orderModel.create({
        userId: req.session.user ? req.session.user.id : null,
        firstName: first_name,
        lastName: last_name,
        email,
        address,
        department,
        country,
        total
      });

      const orderId = orderResult.insertId;

      // Ajouter les items
      for (const item of cart) {
        const itemResult = await this.orderModel.addItem(orderId, item);

        // Ajouter les options des items
        if (item.options && item.options.length > 0) {
          await this.orderModel.addItemOptions(itemResult.insertId, item.options);
        }
      }

      // Créer le paiement
      await this.orderModel.createPayment(orderId, payment_method, total);

      // Vider le panier
      req.session.cart = [];

      res.redirect(`/checkout/success/${orderId}`);
    } catch (error) {
      console.error('Erreur commande:', error);
      res.redirect('/checkout');
    }
  }

  /**
   * Affiche la page de confirmation de commande.
   */
  async showSuccess(req, res) {
    try {
      const order = await this.orderModel.findById(req.params.id);
      if (!order) {
        return res.redirect('/');
      }

      const items = await this.orderModel.getItems(order.id);

      res.render('order-success', {
        title: 'Commande Confirmée — MONOLITH',
        order,
        items
      });
    } catch (error) {
      console.error('Erreur confirmation:', error);
      res.redirect('/');
    }
  }
}

module.exports = CheckoutController;
