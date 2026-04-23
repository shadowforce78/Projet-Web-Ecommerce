const Database = require('../config/database');

/**
 * Modèle pour la gestion des catégories.
 * Encapsule les requêtes SQL liées à la table `categories`.
 */
class CategoryModel {
  constructor() {
    this.db = Database.getInstance();
  }

  /**
   * Récupère toutes les catégories triées par nom.
   * @returns {Promise<Array>}
   */
  async findAll() {
    const [categories] = await this.db.query('SELECT * FROM categories ORDER BY name');
    return categories;
  }
}

module.exports = CategoryModel;
