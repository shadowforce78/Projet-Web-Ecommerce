const express = require('express');
const router = express.Router();
const AdminController = require('../controllers/AdminController');
const AuthMiddleware = require('../middleware/auth');

const adminController = new AdminController();

// Admin dashboard (protégé : authentifié + admin)
router.get('/', AuthMiddleware.isAuthenticated, AuthMiddleware.isAdmin, (req, res) => adminController.showDashboard(req, res));

// Mise à jour du stock d'un produit
router.post('/stock/update', AuthMiddleware.isAuthenticated, AuthMiddleware.isAdmin, (req, res) => adminController.updateStock(req, res));

// Mise à jour en lot des stocks
router.post('/stock/bulk-update', AuthMiddleware.isAuthenticated, AuthMiddleware.isAdmin, (req, res) => adminController.bulkUpdateStock(req, res));

module.exports = router;
