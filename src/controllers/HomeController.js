const ProductModel = require('../models/ProductModel');
const CategoryModel = require('../models/CategoryModel');

/**
 * Contrôleur pour la page d'accueil.
 */
class HomeController {
  constructor() {
    this.productModel = new ProductModel();
    this.categoryModel = new CategoryModel();
  }

  /**
   * Affiche la page d'accueil avec les catégories et produits populaires.
   */
  async show(req, res) {
    try {
      const categories = await this.categoryModel.findAll();
      const products = await this.productModel.getPopular(8);

      res.render('home', {
        title: 'MONOLITH — The Architectural Boutique',
        categories,
        products
      });
    } catch (error) {
      console.error('Erreur page accueil:', error);
      res.render('home', { title: 'MONOLITH', categories: [], products: [] });
    }
  }
}

module.exports = HomeController;
