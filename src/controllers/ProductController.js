const ProductModel = require('../models/ProductModel');
const CategoryModel = require('../models/CategoryModel');

/**
 * Contrôleur pour le catalogue de produits.
 * Gère l'affichage du catalogue et des fiches produits.
 */
class ProductController {
  constructor() {
    this.productModel = new ProductModel();
    this.categoryModel = new CategoryModel();
  }

  /**
   * Affiche le catalogue de produits avec filtres.
   */
  async index(req, res) {
    try {
      const { category, sort, search } = req.query;
      const products = await this.productModel.findAll({ category, sort, search });
      const categories = await this.categoryModel.findAll();

      res.render('products', {
        title: 'Shop — MONOLITH',
        products,
        categories,
        filters: { category, sort, search }
      });
    } catch (error) {
      console.error('Erreur catalogue:', error);
      res.render('products', { title: 'Shop — MONOLITH', products: [], categories: [], filters: {} });
    }
  }

  /**
   * Affiche la fiche détaillée d'un produit.
   */
  async show(req, res) {
    try {
      const product = await this.productModel.findById(req.params.id);

      if (!product) {
        return res.status(404).render('404', { title: 'Produit non trouvé' });
      }

      const optionGroups = await this.productModel.getOptions(req.params.id);
      const recommended = await this.productModel.getRecommended(req.params.id);

      res.render('product-detail', {
        title: `${product.name} — MONOLITH`,
        product,
        optionGroups,
        recommended
      });
    } catch (error) {
      console.error('Erreur fiche produit:', error);
      res.status(500).render('404', { title: 'Erreur' });
    }
  }
}

module.exports = ProductController;
