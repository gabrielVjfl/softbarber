'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payss extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Payss.belongsTo(models.Barbers)
    }
  };
  Payss.init({
    titular: DataTypes.STRING,
    cvc: DataTypes.INTEGER,
    numbercard: DataTypes.STRING,
    password: DataTypes.STRING,
    cpf: DataTypes.STRING,
    BarberId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Payss',
  });
  return Payss;
};