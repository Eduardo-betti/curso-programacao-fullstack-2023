'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('movies', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      // FOTO IMG
      poster: {
        type: Sequelize.STRING,
      },
      // DESCRIÇÃO
      overview: {
        type: Sequelize.TEXT,
      },
      CreatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      uptatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('movies');
  },
};
