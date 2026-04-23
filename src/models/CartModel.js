const Database = require('../config/database');

/**
 * Modèle pour la gestion du panier.
 * Encapsule les requêtes SQL liées aux options du panier.
 */
class CartModel {
  constructor() {
    this.db = Database.getInstance();
  }

  /**
   * Récupère les valeurs d'options avec leur prix et nom de groupe.
   * @param {Array<number>} optionIds - IDs des options sélectionnées
   * @returns {Promise<Array>}
   */
  async getOptionValues(optionIds) {
    if (!optionIds || optionIds.length === 0) return [];

    const [optionValues] = await this.db.query(
      `SELECT ov.*, og.name as group_name FROM option_values ov
       JOIN option_groups og ON ov.option_group_id = og.id
       WHERE ov.id IN (?)`,
      [optionIds]
    );
    return optionValues;
  }
}

module.exports = CartModel;
