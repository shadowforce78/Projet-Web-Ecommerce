const Database = require('../config/database');

/**
 * Modèle pour la gestion des messages de contact.
 * Encapsule les requêtes SQL liées à la table `contact_messages`.
 */
class ContactModel {
  constructor() {
    this.db = Database.getInstance();
  }

  /**
   * Crée un nouveau message de contact.
   * @param {string} email
   * @param {string} subject
   * @param {string} body
   */
  async create(email, subject, body) {
    await this.db.query(
      'INSERT INTO contact_messages (email, subject, body, status, created_at) VALUES (?, ?, ?, ?, NOW())',
      [email, subject, body, 'new']
    );
  }
}

module.exports = ContactModel;
