const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');
require('dotenv').config();

async function initDatabase() {
  // Connexion sans DB pour la créer
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    port: process.env.DB_PORT || 3306,
  });

  const dbName = process.env.DB_NAME || 'monolith_ecommerce';

  console.log('🏗️  Initialisation de la base de données MONOLITH...\n');

  // Créer la BDD
  await connection.query(`DROP DATABASE IF EXISTS \`${dbName}\``);
  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${dbName}\``);
  await connection.query(`USE \`${dbName}\``);
  console.log(`✅ Base de données "${dbName}" créée/sélectionnée`);

  // Créer les tables
  const tables = [
    `CREATE TABLE IF NOT EXISTS users (
      id integer PRIMARY KEY AUTO_INCREMENT,
      email varchar(255) UNIQUE NOT NULL,
      phone varchar(255),
      password_hash varchar(255) NOT NULL,
      created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
    )`,
    `CREATE TABLE IF NOT EXISTS categories (
      id integer PRIMARY KEY AUTO_INCREMENT,
      name varchar(255) UNIQUE NOT NULL,
      slug varchar(255) UNIQUE NOT NULL
    )`,
    `CREATE TABLE IF NOT EXISTS products (
      id integer PRIMARY KEY AUTO_INCREMENT,
      category_id integer NOT NULL,
      name varchar(255) NOT NULL,
      description text,
      image_url varchar(255),
      base_price decimal(10,2) NOT NULL,
      is_active boolean NOT NULL DEFAULT true,
      created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (category_id) REFERENCES categories(id)
    )`,
    `CREATE TABLE IF NOT EXISTS option_groups (
      id integer PRIMARY KEY AUTO_INCREMENT,
      name varchar(255) UNIQUE NOT NULL
    )`,
    `CREATE TABLE IF NOT EXISTS option_values (
      id integer PRIMARY KEY AUTO_INCREMENT,
      option_group_id integer NOT NULL,
      value varchar(255) NOT NULL,
      extra_price decimal(10,2) NOT NULL DEFAULT 0,
      FOREIGN KEY (option_group_id) REFERENCES option_groups(id)
    )`,
    `CREATE TABLE IF NOT EXISTS product_option_values (
      product_id integer NOT NULL,
      option_value_id integer NOT NULL,
      PRIMARY KEY (product_id, option_value_id),
      FOREIGN KEY (product_id) REFERENCES products(id),
      FOREIGN KEY (option_value_id) REFERENCES option_values(id)
    )`,
    `CREATE TABLE IF NOT EXISTS carts (
      id integer PRIMARY KEY AUTO_INCREMENT,
      user_id integer,
      session_token varchar(255) UNIQUE,
      created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id)
    )`,
    `CREATE TABLE IF NOT EXISTS cart_items (
      id integer PRIMARY KEY AUTO_INCREMENT,
      cart_id integer NOT NULL,
      product_id integer NOT NULL,
      quantity integer NOT NULL DEFAULT 1,
      unit_price decimal(10,2) NOT NULL,
      FOREIGN KEY (cart_id) REFERENCES carts(id),
      FOREIGN KEY (product_id) REFERENCES products(id)
    )`,
    `CREATE TABLE IF NOT EXISTS cart_item_option_values (
      cart_item_id integer NOT NULL,
      option_value_id integer NOT NULL,
      PRIMARY KEY (cart_item_id, option_value_id),
      FOREIGN KEY (cart_item_id) REFERENCES cart_items(id),
      FOREIGN KEY (option_value_id) REFERENCES option_values(id)
    )`,
    `CREATE TABLE IF NOT EXISTS orders (
      id integer PRIMARY KEY AUTO_INCREMENT,
      user_id integer,
      first_name varchar(255) NOT NULL,
      last_name varchar(255) NOT NULL,
      email varchar(255) NOT NULL,
      shipping_address varchar(255) NOT NULL,
      shipping_department varchar(255) NOT NULL,
      shipping_country varchar(255) NOT NULL,
      status varchar(255) NOT NULL DEFAULT 'pending',
      total_amount decimal(10,2) NOT NULL,
      created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id)
    )`,
    `CREATE TABLE IF NOT EXISTS order_items (
      id integer PRIMARY KEY AUTO_INCREMENT,
      order_id integer NOT NULL,
      product_id integer NOT NULL,
      product_name_snapshot varchar(255) NOT NULL,
      quantity integer NOT NULL DEFAULT 1,
      unit_price decimal(10,2) NOT NULL,
      FOREIGN KEY (order_id) REFERENCES orders(id),
      FOREIGN KEY (product_id) REFERENCES products(id)
    )`,
    `CREATE TABLE IF NOT EXISTS order_item_option_values (
      order_item_id integer NOT NULL,
      option_value_id integer NOT NULL,
      PRIMARY KEY (order_item_id, option_value_id),
      FOREIGN KEY (order_item_id) REFERENCES order_items(id),
      FOREIGN KEY (option_value_id) REFERENCES option_values(id)
    )`,
    `CREATE TABLE IF NOT EXISTS payments (
      id integer PRIMARY KEY AUTO_INCREMENT,
      order_id integer NOT NULL,
      method varchar(255) NOT NULL,
      transaction_ref varchar(255) UNIQUE,
      amount decimal(10,2) NOT NULL,
      status varchar(255) NOT NULL DEFAULT 'pending',
      paid_at timestamp NULL,
      created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (order_id) REFERENCES orders(id)
    )`,
    `CREATE TABLE IF NOT EXISTS contact_messages (
      id integer PRIMARY KEY AUTO_INCREMENT,
      email varchar(255) NOT NULL,
      subject varchar(255) NOT NULL,
      body text NOT NULL,
      status varchar(255) NOT NULL DEFAULT 'new',
      created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
    )`,
    `CREATE TABLE IF NOT EXISTS faq_categories (
      id integer PRIMARY KEY AUTO_INCREMENT,
      name varchar(255) UNIQUE NOT NULL,
      display_order integer NOT NULL DEFAULT 0
    )`,
    `CREATE TABLE IF NOT EXISTS faq_questions (
      id integer PRIMARY KEY AUTO_INCREMENT,
      category_id integer NOT NULL,
      question varchar(255) NOT NULL,
      answer text NOT NULL,
      display_order integer NOT NULL DEFAULT 0,
      is_active boolean NOT NULL DEFAULT true,
      FOREIGN KEY (category_id) REFERENCES faq_categories(id)
    )`,
    `CREATE TABLE IF NOT EXISTS product_recommendations (
      product_id integer NOT NULL,
      recommended_product_id integer NOT NULL,
      \`rank\` integer NOT NULL DEFAULT 1,
      PRIMARY KEY (product_id, recommended_product_id),
      FOREIGN KEY (product_id) REFERENCES products(id),
      FOREIGN KEY (recommended_product_id) REFERENCES products(id)
    )`
  ];

  for (const sql of tables) {
    await connection.query(sql);
  }
  console.log('✅ Tables créées\n');

  // ---- SEED DATA ----
  console.log('🌱 Insertion des données de démonstration...\n');

  // Catégories
  await connection.query(`INSERT IGNORE INTO categories (name, slug) VALUES
    ('Outerwear', 'outerwear'),
    ('Essentials', 'essentials'),
    ('Objects', 'objects'),
    ('Archive', 'archive'),
    ('Accessories', 'accessories'),
    ('Collections', 'collections')
  `);
  console.log('  ✅ Catégories insérées');

  // Groupes d'options
  await connection.query(`INSERT IGNORE INTO option_groups (name) VALUES ('Taille'), ('Couleur')`);
  console.log('  ✅ Groupes d\'options insérés');

  // Valeurs d'options
  await connection.query(`INSERT IGNORE INTO option_values (option_group_id, value, extra_price) VALUES
    (1, 'XS', 0), (1, 'S', 0), (1, 'M', 0), (1, 'L', 0), (1, 'XL', 0),
    (2, 'Noir Obsidienne', 0), (2, 'Gris Béton', 0), (2, 'Blanc Arctique', 10.00), (2, 'Bronze', 15.00)
  `);
  console.log('  ✅ Options insérées');

  // Produits
  const products = [
    [1, 'Structured Wool Blazer', 'Blazer en laine structurée avec épaules architecturales. Finition matte, doublure intégrale.', 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=70', 540.00],
    [1, 'Monolith Overcoat', 'Manteau long en laine bouillie. Coupe droite, silhouette monolithique.', 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=600&q=70', 1250.00],
    [2, 'Architectural Turtleneck', 'Col roulé en maille fine côtelée. Coupe ajustée, longueur standard.', 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=70', 320.00],
    [2, 'Concrete Trousers', 'Pantalon coupe droite en sergé lourd. Pinces frontales, taille haute.', 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&q=70', 380.00],
    [3, 'Brutalist Armchair v.01', 'Fauteuil en résine moulée et structure acier. Finition noir mat.', 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=70', 1450.00],
    [3, 'Monolith Sculpture', 'Sculpture en verre obsidienne, polie à la main. Numérotation séquentielle.', 'https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=600&q=70', 820.00],
    [5, 'Minimal Leather Belt', 'Ceinture en cuir pleine fleur, boucle minimaliste en acier brossé.', 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=600&q=70', 180.00],
    [2, 'Geometric Knit Sweater', 'Pull en maille géométrique, motifs architecturaux subtils.', 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=600&q=70', 420.00],
    [4, 'Archive Jacket SS22', 'Veste de la collection Archive SS22. Pièce de collection.', 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=70', 690.00],
    [5, 'Obsidian Watch', 'Montre minimaliste cadran noir, bracelet cuir. Mouvement quartz suisse.', 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600&q=70', 950.00],
    [6, 'Collection Capsule 01', 'Une collection capsule exclusive regroupant nos pièces maîtresses de la saison.', 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&q=70', 1500.00],
    [6, 'Set Minimaliste', 'Ensemble de bureau noir mat. Parfait pour les intérieurs épurés.', 'https://images.unsplash.com/photo-1499939667766-4afceb292d05?w=600&q=70', 210.00],
  ];

  for (const p of products) {
    await connection.query(
      'INSERT IGNORE INTO products (category_id, name, description, image_url, base_price, is_active, created_at) VALUES (?, ?, ?, ?, ?, true, NOW())',
      p
    );
  }
  console.log(`  ✅ ${products.length} produits insérés`);

  // Associer les options aux produits (taille pour vêtements, couleur pour tous)
  const [prods] = await connection.query('SELECT id, category_id FROM products');
  const [opts] = await connection.query('SELECT id, option_group_id FROM option_values');

  for (const prod of prods) {
    for (const opt of opts) {
      // Tailles pour vêtements (catégorie 1, 2, 4, 6)
      if (opt.option_group_id === 1 && [1, 2, 4, 6].includes(prod.category_id)) {
        await connection.query('INSERT IGNORE INTO product_option_values (product_id, option_value_id) VALUES (?, ?)', [prod.id, opt.id]);
      }
      // Couleurs pour tous
      if (opt.option_group_id === 2) {
        await connection.query('INSERT IGNORE INTO product_option_values (product_id, option_value_id) VALUES (?, ?)', [prod.id, opt.id]);
      }
    }
  }
  console.log('  ✅ Options associées aux produits');

  // Recommandations
  if (prods.length >= 4) {
    await connection.query('INSERT IGNORE INTO product_recommendations VALUES (?, ?, 1), (?, ?, 2), (?, ?, 1), (?, ?, 2)',
      [prods[0].id, prods[1].id, prods[0].id, prods[2].id, prods[2].id, prods[3].id, prods[4].id, prods[5].id]);
    console.log('  ✅ Recommandations insérées');
  }

  // FAQ
  await connection.query(`INSERT IGNORE INTO faq_categories (name, display_order) VALUES
    ('Commandes & Paiement', 1),
    ('Livraison', 2),
    ('Retours & Échanges', 3),
    ('Produits', 4)
  `);

  const faqQuestions = [
    [1, 'Quels moyens de paiement acceptez-vous ?', 'Nous acceptons les cartes bancaires (Visa, Mastercard, American Express), PayPal et les virements bancaires. Tous les paiements sont sécurisés par cryptage SSL.', 1],
    [1, 'Puis-je modifier ou annuler ma commande ?', 'Vous pouvez modifier ou annuler votre commande dans les 2 heures suivant la confirmation. Contactez notre service conciergerie.', 2],
    [2, 'Quels sont les délais de livraison ?', 'La livraison standard est de 4 à 6 jours ouvrés en France métropolitaine. La livraison express est disponible sous 24-48h.', 1],
    [2, 'Livrez-vous à l\'international ?', 'Oui, nous livrons dans le monde entier. Les délais varient de 5 à 15 jours ouvrés selon la destination.', 2],
    [3, 'Quelle est votre politique de retour ?', 'Vous disposez de 30 jours après réception pour retourner un article dans son état d\'origine. Les frais de retour sont à notre charge.', 1],
    [3, 'Comment effectuer un échange ?', 'Contactez notre service client pour initier un échange. Nous vous enverrons une étiquette de retour prépayée.', 2],
    [4, 'Comment entretenir mes pièces MONOLITH ?', 'Chaque pièce est livrée avec des instructions d\'entretien spécifiques. En général, nous recommandons le nettoyage à sec pour les vêtements structurés.', 1],
    [4, 'Les produits sont-ils numérotés ?', 'Oui, chaque pièce de la collection principale est numérotée et accompagnée d\'un certificat d\'authenticité.', 2],
  ];

  for (const faq of faqQuestions) {
    await connection.query(
      'INSERT IGNORE INTO faq_questions (category_id, question, answer, display_order, is_active) VALUES (?, ?, ?, ?, true)',
      faq
    );
  }
  console.log('  ✅ FAQ insérée');

  // Utilisateur démo
  const demoPassword = await bcrypt.hash('demo123', 10);
  await connection.query(
    'INSERT IGNORE INTO users (email, phone, password_hash, created_at) VALUES (?, ?, ?, NOW())',
    ['demo@monolith.com', '+33 6 12 34 56 78', demoPassword]
  );
  console.log('  ✅ Utilisateur démo créé (demo@monolith.com / demo123)');

  console.log('\n🏛️  Base de données initialisée avec succès !');
  console.log('   Lancez le serveur avec: npm run dev\n');

  await connection.end();
}

initDatabase().catch(err => {
  console.error('❌ Erreur d\'initialisation:', err.message);
  process.exit(1);
});
