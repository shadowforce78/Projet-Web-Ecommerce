const express = require('express');
const router = express.Router();
const DashboardController = require('../controllers/DashboardController');
const AuthMiddleware = require('../middleware/auth');

const dashboardController = new DashboardController();

// Dashboard (protégé)
router.get('/', AuthMiddleware.isAuthenticated, (req, res) => dashboardController.show(req, res));

// Détail d'une commande
router.get('/order/:id', AuthMiddleware.isAuthenticated, (req, res) => dashboardController.showOrder(req, res));

module.exports = router;
