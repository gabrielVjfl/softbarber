'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PayAgendamentos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
     
      PayAgendamentos.belongsTo(models.Clientes)
      PayAgendamentos.hasMany(models.Appointments)
    }
  };
  PayAgendamentos.init({
    numbercard: DataTypes.STRING,
    titular: DataTypes.STRING,
    cvc: DataTypes.INTEGER,
    cpf: DataTypes.STRING,
    ClienteId: DataTypes.INTEGER,

  }, {
    sequelize,
    modelName: 'PayAgendamentos',
  });
  return PayAgendamentos;
};