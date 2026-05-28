const express = require('express');
const session = require('express-session');
const path = require('path');
require('dotenv').config();

/**
 * Classe principale de l'application MONOLITH E-commerce.
 * Encapsule la configuration Express, les middlewares, les routes et le démarrage du serveur.
 */
class App {
  /**
   * Crée une nouvelle instance de l'application.
   */
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3001;

    this.setupViewEngine();
    this.setupMiddleware();
    this.setupLocals();
    this.setupRoutes();
    this.setupErrorHandling();
  }

  /**
   * Configure le moteur de templates EJS.
   */
  setupViewEngine() {
    this.app.set('view engine', 'ejs');
    this.app.set('views', path.join(__dirname, 'views'));
  }

  /**
   * Configure les middlewares Express (body parser, static files, sessions).
   */
  setupMiddleware() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(path.join(__dirname, 'public')));

    // Sessions
    this.app.use(session({
      secret: process.env.SESSION_SECRET || 'monolith_secret',
      resave: false,
      saveUninitialized: true,
      cookie: { maxAge: 24 * 60 * 60 * 1000 } // 24h
    }));
  }

  /**
   * Configure les variables locales disponibles dans toutes les vues.
   */
  setupLocals() {
    this.app.use((req, res, next) => {
      res.locals.user = req.session.user || null;
      res.locals.cartCount = req.session.cart ? req.session.cart.length : 0;
      res.locals.currentPath = req.path;
      next();
    });
  }

  /**
   * Configure les routes de l'application.
   */
  setupRoutes() {
    const homeRoutes = require('./routes/home');
    const productRoutes = require('./routes/products');
    const cartRoutes = require('./routes/cart');
    const checkoutRoutes = require('./routes/checkout');
    const authRoutes = require('./routes/auth');
    const dashboardRoutes = require('./routes/dashboard');
    const adminRoutes = require('./routes/admin');
    const pagesRoutes = require('./routes/pages');

    this.app.use('/', homeRoutes);
    this.app.use('/products', productRoutes);
    this.app.use('/cart', cartRoutes);
    this.app.use('/checkout', checkoutRoutes);
    this.app.use('/auth', authRoutes);
    this.app.use('/dashboard', dashboardRoutes);
    this.app.use('/admin', adminRoutes);
    this.app.use('/', pagesRoutes);
  }

  /**
   * Configure la gestion des erreurs 404.
   */
  setupErrorHandling() {
    this.app.use((req, res) => {
      res.status(404).render('404', { title: 'Page non trouvée' });
    });
  }

  /**
   * Démarre le serveur Express.
   */
  start() {
    this.app.listen(this.port, () => {
      console.log(`🏛️  MONOLITH E-commerce — http://localhost:${this.port}`);
    });
  }
}

// Démarrer l'application
const app = new App();
app.start();