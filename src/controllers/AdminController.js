const UserModel = require('../models/UserModel');
const ProductModel = require('../models/ProductModel');
const OrderModel = require('../models/OrderModel');

/**
 * Contrôleur pour le tableau de bord d'administration.
 * Gère l'affichage du dashboard admin et la gestion des stocks.
 */
class AdminController {
  constructor() {
    this.userModel = new UserModel();
    this.productModel = new ProductModel();
    this.orderModel = new OrderModel();
  }

  /**
   * Affiche le dashboard administrateur avec les statistiques et la liste des produits.
   */
  async showDashboard(req, res) {
    try {
      const profile = await this.userModel.findById(req.session.user.id);

      // Récupérer les paramètres de tri et recherche
      const sort = req.query.sort || 'stock_asc';
      const search = req.query.search || '';

      // Statistiques
      const totalProducts = await this.productModel.countAll();
      const lowStockCount = await this.productModel.countLowStock();
      const outOfStockCount = await this.productModel.countOutOfStock();

      // Récupérer les commandes pour le compte
      const [orderRows] = await require('../config/database').getInstance().query(
        'SELECT COUNT(*) as count FROM orders'
      );
      const totalOrders = orderRows[0].count;

      // Récupérer les utilisateurs pour le compte
      const [userRows] = await require('../config/database').getInstance().query(
        'SELECT COUNT(*) as count FROM users'
      );
      const totalUsers = userRows[0].count;

      // Liste des produits pour la gestion des stocks
      const products = await this.productModel.findAllAdmin({ sort, search });

      // Message flash (succès de mise à jour)
      const successMessage = req.query.success || null;

      res.render('admin/dashboard', {
        title: 'Administration — MONOLITH',
        profile,
        products,
        stats: {
          totalProducts,
          totalOrders,
          totalUsers,
          lowStockCount,
          outOfStockCount
        },
        sort,
        search,
        successMessage
      });
    } catch (error) {
      console.error('Erreur admin dashboard:', error);
      res.render('admin/dashboard', {
        title: 'Administration — MONOLITH',
        profile: req.session.user,
        products: [],
        stats: { totalProducts: 0, totalOrders: 0, totalUsers: 0, lowStockCount: 0, outOfStockCount: 0 },
        sort: 'stock_asc',
        search: '',
        successMessage: null
      });
    }
  }

  /**
   * Met à jour le stock d'un produit.
   */
  async updateStock(req, res) {
    try {
      const { product_id, stock } = req.body;
      const newStock = parseInt(stock);

      if (isNaN(newStock) || newStock < 0) {
        return res.redirect('/admin?error=invalid_stock');
      }

      await this.productModel.updateStock(product_id, newStock);

      // Récupérer le nom du produit pour le message
      const product = await this.productModel.findById(product_id);
      const productName = product ? product.name : `#${product_id}`;

      res.redirect(`/admin?success=${encodeURIComponent(`Stock de "${productName}" mis à jour : ${newStock}`)}`);
    } catch (error) {
      console.error('Erreur mise à jour stock:', error);
      res.redirect('/admin?error=update_failed');
    }
  }

  /**
   * Met à jour le stock de plusieurs produits en une seule fois.
   */
  async bulkUpdateStock(req, res) {
    try {
      const { stocks } = req.body;

      if (!stocks || typeof stocks !== 'object') {
        return res.redirect('/admin?error=invalid_data');
      }

      let updatedCount = 0;
      for (const [productId, stockValue] of Object.entries(stocks)) {
        const newStock = parseInt(stockValue);
        if (!isNaN(newStock) && newStock >= 0) {
          await this.productModel.updateStock(parseInt(productId), newStock);
          updatedCount++;
        }
      }

      res.redirect(`/admin?success=${encodeURIComponent(`${updatedCount} produit(s) mis à jour`)}`);
    } catch (error) {
      console.error('Erreur mise à jour en lot:', error);
      res.redirect('/admin?error=bulk_update_failed');
    }
  }
}

module.exports = AdminController;
