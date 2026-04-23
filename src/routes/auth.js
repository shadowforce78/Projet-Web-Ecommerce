const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');

const authController = new AuthController();

// Page connexion
router.get('/login', (req, res) => authController.showLogin(req, res));

// Connexion
router.post('/login', (req, res) => authController.login(req, res));

// Page inscription
router.get('/register', (req, res) => authController.showRegister(req, res));

// Inscription
router.post('/register', (req, res) => authController.register(req, res));

// Déconnexion
router.get('/logout', (req, res) => authController.logout(req, res));

module.exports = router;
