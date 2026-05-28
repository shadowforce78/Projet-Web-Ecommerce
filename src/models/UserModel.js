const Database = require('../config/database');

/**
 * Modèle pour la gestion des utilisateurs.
 * Encapsule toutes les requêtes SQL liées à la table `users`.
 */
class UserModel {
  constructor() {
    this.db = Database.getInstance();
  }

  /**
   * Recherche un utilisateur par email.
   * @param {string} email
   * @returns {Promise<Object|null>}
   */
  async findByEmail(email) {
    const [users] = await this.db.query('SELECT * FROM users WHERE email = ?', [email]);
    return users.length > 0 ? users[0] : null;
  }

  /**
   * Recherche un utilisateur par ID.
   * @param {number} id
   * @returns {Promise<Object|null>}
   */
  async findById(id) {
    const [users] = await this.db.query('SELECT * FROM users WHERE id = ?', [id]);
    return users.length > 0 ? users[0] : null;
  }

  /**
   * Crée un nouvel utilisateur.
   * @param {string} email
   * @param {string|null} phone
   * @param {string} passwordHash - Mot de passe déjà hashé
   * @param {string} status - Rôle de l'utilisateur ('admin' ou 'user'), défaut 'user'
   * @returns {Promise<Object>} Résultat de l'insertion (contient insertId)
   */
  async create(email, phone, passwordHash, status = 'user') {
    const [result] = await this.db.query(
      'INSERT INTO users (email, phone, password_hash, status, created_at) VALUES (?, ?, ?, ?, NOW())',
      [email, phone || null, passwordHash, status]
    );
    return result;
  }

  /**
   * Vérifie si un email existe déjà.
   * @param {string} email
   * @returns {Promise<boolean>}
   */
  async emailExists(email) {
    const [existing] = await this.db.query('SELECT id FROM users WHERE email = ?', [email]);
    return existing.length > 0;
  }
}

module.exports = UserModel;
