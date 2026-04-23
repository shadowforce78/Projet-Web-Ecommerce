const express = require('express');
const router = express.Router();
const PagesController = require('../controllers/PagesController');

const pagesController = new PagesController();

// Page Story / À propos
router.get('/story', (req, res) => pagesController.showStory(req, res));

// FAQ / Support
router.get('/faq', (req, res) => pagesController.showFaq(req, res));

// Formulaire de contact
router.post('/contact', (req, res) => pagesController.submitContact(req, res));

module.exports = router;
