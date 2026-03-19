CREATE TABLE `users` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `email` varchar(255) UNIQUE NOT NULL,
  `phone` varchar(255),
  `password_hash` varchar(255) NOT NULL COMMENT 'Mot de passe hashé, jamais en clair',
  `created_at` timestamp NOT NULL
);

CREATE TABLE `categories` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255) UNIQUE NOT NULL,
  `slug` varchar(255) UNIQUE NOT NULL
);

CREATE TABLE `products` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `category_id` integer NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text,
  `image_url` varchar(255),
  `base_price` decimal(10,2) NOT NULL,
  `is_active` boolean NOT NULL DEFAULT true,
  `created_at` timestamp NOT NULL
);

CREATE TABLE `option_groups` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255) UNIQUE NOT NULL COMMENT 'Ex: Taille, Couleur'
);

CREATE TABLE `option_values` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `option_group_id` integer NOT NULL,
  `value` varchar(255) NOT NULL COMMENT 'Ex: M, L, Rouge, Bleu',
  `extra_price` decimal(10,2) NOT NULL DEFAULT 0
);

CREATE TABLE `product_option_values` (
  `product_id` integer NOT NULL,
  `option_value_id` integer NOT NULL,
  PRIMARY KEY (`product_id`, `option_value_id`)
);

CREATE TABLE `carts` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `user_id` integer,
  `session_token` varchar(255) UNIQUE COMMENT 'Pour panier invité non connecté',
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL
);

CREATE TABLE `cart_items` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `cart_id` integer NOT NULL,
  `product_id` integer NOT NULL,
  `quantity` integer NOT NULL DEFAULT 1,
  `unit_price` decimal(10,2) NOT NULL COMMENT 'Prix au moment de l’ajout'
);

CREATE TABLE `cart_item_option_values` (
  `cart_item_id` integer NOT NULL,
  `option_value_id` integer NOT NULL,
  PRIMARY KEY (`cart_item_id`, `option_value_id`)
);

CREATE TABLE `orders` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `user_id` integer,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `shipping_address` varchar(255) NOT NULL,
  `shipping_department` varchar(255) NOT NULL,
  `shipping_country` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL COMMENT 'pending, paid, canceled',
  `total_amount` decimal(10,2) NOT NULL,
  `created_at` timestamp NOT NULL
);

CREATE TABLE `order_items` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `order_id` integer NOT NULL,
  `product_id` integer NOT NULL,
  `product_name_snapshot` varchar(255) NOT NULL,
  `quantity` integer NOT NULL DEFAULT 1,
  `unit_price` decimal(10,2) NOT NULL
);

CREATE TABLE `order_item_option_values` (
  `order_item_id` integer NOT NULL,
  `option_value_id` integer NOT NULL,
  PRIMARY KEY (`order_item_id`, `option_value_id`)
);

CREATE TABLE `payments` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `order_id` integer NOT NULL,
  `method` varchar(255) NOT NULL COMMENT 'cb, paypal, etc.',
  `transaction_ref` varchar(255) UNIQUE,
  `amount` decimal(10,2) NOT NULL,
  `status` varchar(255) NOT NULL COMMENT 'pending, success, failed',
  `paid_at` timestamp,
  `created_at` timestamp NOT NULL
);

CREATE TABLE `contact_messages` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `body` text NOT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'new',
  `created_at` timestamp NOT NULL
);

CREATE TABLE `faq_categories` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255) UNIQUE NOT NULL,
  `display_order` integer NOT NULL DEFAULT 0
);

CREATE TABLE `faq_questions` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `category_id` integer NOT NULL,
  `question` varchar(255) NOT NULL,
  `answer` text NOT NULL,
  `display_order` integer NOT NULL DEFAULT 0,
  `is_active` boolean NOT NULL DEFAULT true
);

CREATE TABLE `product_recommendations` (
  `product_id` integer NOT NULL,
  `recommended_product_id` integer NOT NULL,
  `rank` integer NOT NULL DEFAULT 1,
  PRIMARY KEY (`product_id`, `recommended_product_id`)
);

ALTER TABLE `products` ADD FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`);

ALTER TABLE `option_values` ADD FOREIGN KEY (`option_group_id`) REFERENCES `option_groups` (`id`);

ALTER TABLE `product_option_values` ADD FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

ALTER TABLE `product_option_values` ADD FOREIGN KEY (`option_value_id`) REFERENCES `option_values` (`id`);

ALTER TABLE `carts` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `cart_items` ADD FOREIGN KEY (`cart_id`) REFERENCES `carts` (`id`);

ALTER TABLE `cart_items` ADD FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

ALTER TABLE `cart_item_option_values` ADD FOREIGN KEY (`cart_item_id`) REFERENCES `cart_items` (`id`);

ALTER TABLE `cart_item_option_values` ADD FOREIGN KEY (`option_value_id`) REFERENCES `option_values` (`id`);

ALTER TABLE `orders` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `order_items` ADD FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`);

ALTER TABLE `order_items` ADD FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

ALTER TABLE `order_item_option_values` ADD FOREIGN KEY (`order_item_id`) REFERENCES `order_items` (`id`);

ALTER TABLE `order_item_option_values` ADD FOREIGN KEY (`option_value_id`) REFERENCES `option_values` (`id`);

ALTER TABLE `payments` ADD FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`);

ALTER TABLE `faq_questions` ADD FOREIGN KEY (`category_id`) REFERENCES `faq_categories` (`id`);

ALTER TABLE `product_recommendations` ADD FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

ALTER TABLE `product_recommendations` ADD FOREIGN KEY (`recommended_product_id`) REFERENCES `products` (`id`);
