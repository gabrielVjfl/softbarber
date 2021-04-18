'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Schedules extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Schedules.belongsTo(models.Barbers)
    }
  };
  Schedules.init({
    weekday: DataTypes.INTEGER,
    diasemana: DataTypes.STRING,
    horafrom: DataTypes.INTEGER,
    horato: DataTypes.INTEGER,
    horacomeco: DataTypes.TIME,
    horafim: DataTypes.TIME,
    BarberId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Schedules',
  });
  return Schedules;
};