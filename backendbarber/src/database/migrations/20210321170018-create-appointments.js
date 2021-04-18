'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Appointments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      horamarcada: {
        type: Sequelize.TIME,
        allowNull: false,
      },

      daytotal: {
        type: Sequelize.DATE,
        
      },
      diasemana: {
        type: Sequelize.STRING,
        allowNull: false,
      }, 
      weekday: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      day: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      servico: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      iscanceled: {
        type: Sequelize.TINYINT,
        defaultValue: 0,
      },
      paytype: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ispay: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0,
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
      ClienteId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Clientes',
          key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
      PayAgendamentoId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'PayAgendamentos',
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
    await queryInterface.dropTable('Appointments');
  }
};