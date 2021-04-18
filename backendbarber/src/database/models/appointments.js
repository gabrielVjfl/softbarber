'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Appointments.belongsTo(models.Barbers)
      Appointments.belongsTo(models.Clientes)
      Appointments.belongsTo(models.PayAgendamentos)
    }
  };
  Appointments.init({
    horamarcada: DataTypes.TIME,
    diasemana: DataTypes.STRING,
    weekday: DataTypes.INTEGER,
    day: DataTypes.DATEONLY,
    servico: DataTypes.STRING,
    iscanceled: DataTypes.TINYINT,
    paytype: DataTypes.STRING,
    ispay: DataTypes.BOOLEAN,
    daytotal: DataTypes.DATE,
    BarberId: DataTypes.INTEGER,
    ClienteId: DataTypes.INTEGER,
    PayAgendamentoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Appointments',
  });
  return Appointments;
};