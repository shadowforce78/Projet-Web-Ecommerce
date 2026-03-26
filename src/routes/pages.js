const express = require('express');
const router = express.Router();
const db = require('../config/database');

// Page Story / À propos
router.get('/story', (req, res) => {
  res.render('story', { title: 'Notre Histoire — MONOLITH' });
});

// FAQ / Support
router.get('/faq', async (req, res) => {
  try {
    const [categories] = await db.query(
      'SELECT * FROM faq_categories ORDER BY display_order'
    );

    const [questions] = await db.query(
      `SELECT fq.*, fc.name as category_name
       FROM faq_questions fq
       JOIN faq_categories fc ON fq.category_id = fc.id
       WHERE fq.is_active = true
       ORDER BY fc.display_order, fq.display_order`
    );

    // Grouper par catégorie
    const faqByCategory = {};
    questions.forEach(q => {
      if (!faqByCategory[q.category_name]) {
        faqByCategory[q.category_name] = [];
      }
      faqByCategory[q.category_name].push(q);
    });

    res.render('faq', {
      title: 'FAQ & Support — MONOLITH',
      categories,
      faqByCategory
    });
  } catch (error) {
    console.error('Erreur FAQ:', error);
    res.render('faq', { title: 'FAQ & Support — MONOLITH', categories: [], faqByCategory: {} });
  }
});

// Formulaire de contact
router.post('/contact', async (req, res) => {
  try {
    const { email, subject, body } = req.body;

    await db.query(
      'INSERT INTO contact_messages (email, subject, body, status, created_at) VALUES (?, ?, ?, ?, NOW())',
      [email, subject, body, 'new']
    );

    res.redirect('/faq?success=1');
  } catch (error) {
    console.error('Erreur contact:', error);
    res.redirect('/faq?error=1');
  }
});

module.exports = router;
