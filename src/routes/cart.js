const express = require('express');
const router = express.Router();
const CartController = require('../controllers/CartController');

const cartController = new CartController();

// Afficher le panier
router.get('/', (req, res) => cartController.show(req, res));

// Ajouter au panier
router.post('/add', (req, res) => cartController.add(req, res));

// Modifier quantité
router.post('/update', (req, res) => cartController.update(req, res));

// Supprimer du panier
router.post('/remove', (req, res) => cartController.remove(req, res));

module.exports = router;
