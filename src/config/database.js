const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'monolith_ecommerce',
  port: process.env.DB_PORT || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Test de connexion
pool.getConnection()
  .then(conn => {
    console.log('✅ Connexion MySQL établie');
    conn.release();
  })
  .catch(err => {
    console.error('❌ Erreur de connexion MySQL:', err.message);
  });

module.exports = pool;
