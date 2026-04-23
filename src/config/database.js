const mysql = require('mysql2/promise');
require('dotenv').config();

/**
 * Classe Singleton pour la connexion MySQL.
 * Garantit une seule instance du pool de connexions dans toute l'application.
 */
class Database {
  /**
   * Constructeur privé (convention) — ne pas instancier directement.
   * Utiliser Database.getInstance() à la place.
   */
  constructor() {
    this.pool = mysql.createPool({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'monolith_ecommerce',
      port: process.env.DB_PORT || 3306,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
    });
  }

  /**
   * Retourne l'instance unique de Database (Singleton).
   * @returns {Database}
   */
  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  /**
   * Retourne le pool de connexions MySQL.
   * @returns {mysql.Pool}
   */
  getPool() {
    return this.pool;
  }

  /**
   * Raccourci pour exécuter une requête SQL.
   * @param {string} sql - Requête SQL
   * @param {Array} params - Paramètres de la requête
   * @returns {Promise<Array>}
   */
  async query(sql, params = []) {
    return this.pool.query(sql, params);
  }

  /**
   * Teste la connexion à la base de données.
   */
  async testConnection() {
    try {
      const connection = await this.pool.getConnection();
      console.log('✅ Connexion MySQL établie');
      connection.release();
    } catch (err) {
      console.error('❌ Erreur de connexion MySQL:', err.message);
    }
  }
}

// Tester la connexion au chargement du module
const db = Database.getInstance();
db.testConnection();

module.exports = Database;
