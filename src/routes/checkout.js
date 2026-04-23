const express = require('express');
const router = express.Router();
const CheckoutController = require('../controllers/CheckoutController');

const checkoutController = new CheckoutController();

// Formulaire checkout
router.get('/', (req, res) => checkoutController.show(req, res));

// Passer la commande
router.post('/place-order', (req, res) => checkoutController.placeOrder(req, res));

// Confirmation de commande
router.get('/success/:id', (req, res) => checkoutController.showSuccess(req, res));

module.exports = router;
