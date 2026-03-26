const express = require('express');
const session = require('express-session');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Sessions
app.use(session({
  secret: process.env.SESSION_SECRET || 'monolith_secret',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 24 * 60 * 60 * 1000 } // 24h
}));

// Variables locales pour les vues (user connecté, panier)
app.use((req, res, next) => {
  res.locals.user = req.session.user || null;
  res.locals.cartCount = req.session.cart ? req.session.cart.length : 0;
  res.locals.currentPath = req.path;
  next();
});

// Routes
const homeRoutes = require('./routes/home');
const productRoutes = require('./routes/products');
const cartRoutes = require('./routes/cart');
const checkoutRoutes = require('./routes/checkout');
const authRoutes = require('./routes/auth');
const dashboardRoutes = require('./routes/dashboard');
const pagesRoutes = require('./routes/pages');

app.use('/', homeRoutes);
app.use('/products', productRoutes);
app.use('/cart', cartRoutes);
app.use('/checkout', checkoutRoutes);
app.use('/auth', authRoutes);
app.use('/dashboard', dashboardRoutes);
app.use('/', pagesRoutes);

// 404
app.use((req, res) => {
  res.status(404).render('404', { title: 'Page non trouvée' });
});

app.listen(port, () => {
  console.log(`🏛️  MONOLITH E-commerce — http://localhost:${port}`);
});