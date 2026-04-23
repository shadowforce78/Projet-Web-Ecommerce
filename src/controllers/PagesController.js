const FaqModel = require('../models/FaqModel');
const ContactModel = require('../models/ContactModel');

/**
 * Contrôleur pour les pages statiques et la FAQ.
 * Gère la page "Notre Histoire", la FAQ et le formulaire de contact.
 */
class PagesController {
  constructor() {
    this.faqModel = new FaqModel();
    this.contactModel = new ContactModel();
  }

  /**
   * Affiche la page "Notre Histoire".
   */
  showStory(req, res) {
    res.render('story', { title: 'Notre Histoire — MONOLITH' });
  }

  /**
   * Affiche la page FAQ avec les questions groupées par catégorie.
   */
  async showFaq(req, res) {
    try {
      const categories = await this.faqModel.getCategories();
      const faqByCategory = await this.faqModel.getQuestionsByCategory();

      res.render('faq', {
        title: 'FAQ & Support — MONOLITH',
        categories,
        faqByCategory
      });
    } catch (error) {
      console.error('Erreur FAQ:', error);
      res.render('faq', { title: 'FAQ & Support — MONOLITH', categories: [], faqByCategory: {} });
    }
  }

  /**
   * Traite la soumission du formulaire de contact.
   */
  async submitContact(req, res) {
    try {
      const { email, subject, body } = req.body;
      await this.contactModel.create(email, subject, body);
      res.redirect('/faq?success=1');
    } catch (error) {
      console.error('Erreur contact:', error);
      res.redirect('/faq?error=1');
    }
  }
}

module.exports = PagesController;
