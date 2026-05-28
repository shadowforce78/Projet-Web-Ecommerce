const UserModel = require('../models/UserModel');

/**
 * Contrôleur pour le tableau de bord d'administration.
 * Gère l'affichage du dashboard admin et la gestion des stocks.
 */
class AdminController {
  constructor() {
    this.userModel = new UserModel();
  }

  /**
   * Affiche le dashboard administrateur.
   */
  async showDashboard(req, res) {
    try {
      const profile = await this.userModel.findById(req.session.user.id);

      res.render('admin/dashboard', {
        title: 'Administration — MONOLITH',
        profile
      });
    } catch (error) {
      console.error('Erreur admin dashboard:', error);
      res.render('admin/dashboard', {
        title: 'Administration — MONOLITH',
        profile: req.session.user
      });
    }
  }
}

module.exports = AdminController;
