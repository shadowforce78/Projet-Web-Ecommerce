const express = require('express');
const router = express.Router();
const AdminController = require('../controllers/AdminController');
const AuthMiddleware = require('../middleware/auth');

const adminController = new AdminController();

// Admin dashboard (protégé : authentifié + admin)
router.get('/', AuthMiddleware.isAuthenticated, AuthMiddleware.isAdmin, (req, res) => adminController.showDashboard(req, res));

module.exports = router;
