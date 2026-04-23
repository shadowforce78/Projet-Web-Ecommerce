const OrderModel = require('../models/OrderModel');
const UserModel = require('../models/UserModel');

/**
 * Contrôleur pour le tableau de bord utilisateur.
 * Gère l'affichage du dashboard et le détail des commandes.
 */
class DashboardController {
  constructor() {
    this.orderModel = new OrderModel();
    this.userModel = new UserModel();
  }

  /**
   * Affiche le dashboard utilisateur avec ses commandes.
   */
  async show(req, res) {
    try {
      const orders = await this.orderModel.findByUserId(req.session.user.id);
      const profile = await this.userModel.findById(req.session.user.id);

      res.render('dashboard', {
        title: 'Mon Compte — MONOLITH',
        orders,
        profile
      });
    } catch (error) {
      console.error('Erreur dashboard:', error);
      res.render('dashboard', { title: 'Mon Compte — MONOLITH', orders: [], profile: req.session.user });
    }
  }

  /**
   * Affiche le détail d'une commande.
   */
  async showOrder(req, res) {
    try {
      const order = await this.orderModel.findByIdAndUser(req.params.id, req.session.user.id);

      if (!order) return res.redirect('/dashboard');

      const items = await this.orderModel.getItems(req.params.id);

      res.render('order-detail', {
        title: `Commande #${req.params.id} — MONOLITH`,
        order,
        items
      });
    } catch (error) {
      console.error('Erreur détail commande:', error);
      res.redirect('/dashboard');
    }
  }
}

module.exports = DashboardController;
