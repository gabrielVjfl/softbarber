'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Days', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dayweek: {
        type: Sequelize.STRING
      },
      hourtoManha: {
        type: Sequelize.TIME
      },
      hourfromManha: {
        type: Sequelize.TIME
      },
      hourtoTarde: {
        type: Sequelize.TIME
      },
      hourfromTarde: {
        type: Sequelize.TIME
      },
      BarberId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Barbers',
          key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Days');
  }
};