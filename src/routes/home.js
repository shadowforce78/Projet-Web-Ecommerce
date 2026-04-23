const express = require('express');
const router = express.Router();
const HomeController = require('../controllers/HomeController');

const homeController = new HomeController();

// Page d'accueil
router.get('/', (req, res) => homeController.show(req, res));

module.exports = router;
