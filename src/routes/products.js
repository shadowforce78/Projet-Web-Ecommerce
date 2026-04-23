const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController');

const productController = new ProductController();

// Catalogue de produits
router.get('/', (req, res) => productController.index(req, res));

// Fiche produit
router.get('/:id', (req, res) => productController.show(req, res));

module.exports = router;
