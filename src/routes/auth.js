const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('../config/database');

// Page connexion
router.get('/login', (req, res) => {
  if (req.session.user) return res.redirect('/dashboard');
  res.render('login', { title: 'Connexion — MONOLITH', error: null });
});

// Connexion
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const [users] = await db.query('SELECT * FROM users WHERE email = ?', [email]);

    if (users.length === 0) {
      return res.render('login', { title: 'Connexion — MONOLITH', error: 'Email ou mot de passe incorrect' });
    }

    const user = users[0];
    const validPassword = await bcrypt.compare(password, user.password_hash);

    if (!validPassword) {
      return res.render('login', { title: 'Connexion — MONOLITH', error: 'Email ou mot de passe incorrect' });
    }

    req.session.user = {
      id: user.id,
      email: user.email,
      phone: user.phone
    };

    res.redirect('/dashboard');
  } catch (error) {
    console.error('Erreur connexion:', error);
    res.render('login', { title: 'Connexion — MONOLITH', error: 'Erreur serveur' });
  }
});

// Page inscription
router.get('/register', (req, res) => {
  if (req.session.user) return res.redirect('/dashboard');
  res.render('register', { title: 'Inscription — MONOLITH', error: null });
});

// Inscription
router.post('/register', async (req, res) => {
  try {
    const { email, phone, password, password_confirm } = req.body;

    if (password !== password_confirm) {
      return res.render('register', { title: 'Inscription — MONOLITH', error: 'Les mots de passe ne correspondent pas' });
    }

    // Vérifier si l'email existe
    const [existing] = await db.query('SELECT id FROM users WHERE email = ?', [email]);
    if (existing.length > 0) {
      return res.render('register', { title: 'Inscription — MONOLITH', error: 'Cet email est déjà utilisé' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const [result] = await db.query(
      'INSERT INTO users (email, phone, password_hash, created_at) VALUES (?, ?, ?, NOW())',
      [email, phone || null, hashedPassword]
    );

    req.session.user = {
      id: result.insertId,
      email,
      phone: phone || null
    };

    res.redirect('/dashboard');
  } catch (error) {
    console.error('Erreur inscription:', error);
    res.render('register', { title: 'Inscription — MONOLITH', error: 'Erreur serveur' });
  }
});

// Déconnexion
router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

module.exports = router;
