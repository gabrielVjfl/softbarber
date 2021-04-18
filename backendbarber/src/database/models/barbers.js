'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Barbers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Barbers.hasMany(models.Payss)
      Barbers.hasMany(models.Appointments)
      Barbers.hasMany(models.Conections)
      Barbers.hasMany(models.Schedules)
      Barbers.hasMany(models.Servicos)
      Barbers.hasMany(models.Days)
   

    }

  };
  Barbers.init({
    namelocal: DataTypes.STRING,
    avatar: DataTypes.STRING,
    cep: DataTypes.STRING,
    cidade: DataTypes.STRING,
    cpfcnpj: DataTypes.STRING,
    estado: DataTypes.STRING,
    rua: DataTypes.STRING,
    telefone: DataTypes.STRING,
    numero: DataTypes.INTEGER,
    bairro: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    numerodaconta: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Barbers',
  });
  return Barbers;
};