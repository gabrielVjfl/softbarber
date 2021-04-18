'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Days extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Days.belongsTo(models.Barbers)
    }
  };
  Days.init({
    dayweek: DataTypes.STRING,
    hourtoManha: DataTypes.TIME,
    hourfromManha: DataTypes.TIME,
    hourtoTarde: DataTypes.TIME,
    hourfromTarde: DataTypes.TIME,
    BarberId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Days',
  });
  return Days;
};