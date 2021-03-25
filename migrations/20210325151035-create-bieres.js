'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Bieres', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      brewery_id: {
        type: Sequelize.NUMBER
      },
      name: {
        type: Sequelize.STRING
      },
      abv: {
        type: Sequelize.NUMBER
      },
      description: {
        type: Sequelize.STRING
      },
      brewer: {
        type: Sequelize.STRING
      },
      pays: {
        type: Sequelize.STRING
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Bieres');
  }
};