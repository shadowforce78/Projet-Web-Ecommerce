const bcrypt = require('bcrypt');
const UserModel = require('../models/UserModel');

/**
 * Contrôleur pour l'authentification.
 * Gère la connexion, l'inscription et la déconnexion des utilisateurs.
 */
class AuthController {
  constructor() {
    this.userModel = new UserModel();
  }

  /**
   * Affiche la page de connexion.
   */
  showLogin(req, res) {
    if (req.session.user) return res.redirect('/dashboard');
    res.render('login', { title: 'Connexion — MONOLITH', error: null });
  }

  /**
   * Traite la connexion d'un utilisateur.
   */
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await this.userModel.findByEmail(email);

      if (!user) {
        return res.render('login', { title: 'Connexion — MONOLITH', error: 'Email ou mot de passe incorrect' });
      }

      const validPassword = await bcrypt.compare(password, user.password_hash);

      if (!validPassword) {
        return res.render('login', { title: 'Connexion — MONOLITH', error: 'Email ou mot de passe incorrect' });
      }

      req.session.user = {
        id: user.id,
        email: user.email,
        phone: user.phone,
        status: user.status
      };

      res.redirect('/dashboard');
    } catch (error) {
      console.error('Erreur connexion:', error);
      res.render('login', { title: 'Connexion — MONOLITH', error: 'Erreur serveur' });
    }
  }

  /**
   * Affiche la page d'inscription.
   */
  showRegister(req, res) {
    if (req.session.user) return res.redirect('/dashboard');
    res.render('register', { title: 'Inscription — MONOLITH', error: null });
  }

  /**
   * Traite l'inscription d'un nouvel utilisateur.
   */
  async register(req, res) {
    try {
      const { email, phone, password, password_confirm } = req.body;

      if (password !== password_confirm) {
        return res.render('register', { title: 'Inscription — MONOLITH', error: 'Les mots de passe ne correspondent pas' });
      }

      // Vérifier si l'email existe
      const exists = await this.userModel.emailExists(email);
      if (exists) {
        return res.render('register', { title: 'Inscription — MONOLITH', error: 'Cet email est déjà utilisé' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const result = await this.userModel.create(email, phone, hashedPassword);

      req.session.user = {
        id: result.insertId,
        email,
        phone: phone || null,
        status: 'user'
      };

      res.redirect('/dashboard');
    } catch (error) {
      console.error('Erreur inscription:', error);
      res.render('register', { title: 'Inscription — MONOLITH', error: 'Erreur serveur' });
    }
  }

  /**
   * Déconnecte l'utilisateur.
   */
  logout(req, res) {
    req.session.destroy();
    res.redirect('/');
  }
}

module.exports = AuthController;
