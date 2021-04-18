'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Conections extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Conections.belongsTo(models.Clientes)
      Conections.belongsTo(models.Barbers)
    }
  };
  Conections.init({
    ClienteId: DataTypes.INTEGER,
    BarberId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Conections',
  });
  return Conections;
};