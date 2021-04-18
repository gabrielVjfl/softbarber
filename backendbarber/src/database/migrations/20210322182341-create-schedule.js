'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Schedules', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      diasemana: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      weekday: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      horafrom: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      horato: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      horacomeco: {
        type: Sequelize.TIME,
        allowNull: false,
      },
      horafim: {
        type: Sequelize.TIME,
        allowNull: false,
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
    await queryInterface.dropTable('Schedules');
  }
};