const Database = require('../config/database');

/**
 * Modèle pour la gestion de la FAQ.
 * Encapsule les requêtes SQL liées aux tables `faq_categories` et `faq_questions`.
 */
class FaqModel {
  constructor() {
    this.db = Database.getInstance();
  }

  /**
   * Récupère les catégories FAQ triées par ordre d'affichage.
   * @returns {Promise<Array>}
   */
  async getCategories() {
    const [categories] = await this.db.query(
      'SELECT * FROM faq_categories ORDER BY display_order'
    );
    return categories;
  }

  /**
   * Récupère les questions groupées par catégorie.
   * @returns {Promise<Object>} Questions groupées par nom de catégorie
   */
  async getQuestionsByCategory() {
    const [questions] = await this.db.query(
      `SELECT fq.*, fc.name as category_name
       FROM faq_questions fq
       JOIN faq_categories fc ON fq.category_id = fc.id
       WHERE fq.is_active = true
       ORDER BY fc.display_order, fq.display_order`
    );

    const faqByCategory = {};
    questions.forEach(q => {
      if (!faqByCategory[q.category_name]) {
        faqByCategory[q.category_name] = [];
      }
      faqByCategory[q.category_name].push(q);
    });

    return faqByCategory;
  }
}

module.exports = FaqModel;
