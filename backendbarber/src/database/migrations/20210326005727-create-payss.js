'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Paysses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titular: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cvc: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      numbercard: {
        type: Sequelize.STRING,
        allowNull: false,
        unique:true,
      },
      password: {
        type: Sequelize.STRING
      },
      cpf: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      BarberId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Barbers',
          key: 'id',
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
    await queryInterface.dropTable('Paysses');
  }
};