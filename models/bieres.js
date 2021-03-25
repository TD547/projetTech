'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bieres extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Bieres.init({
    brewery_id: DataTypes.NUMBER,
    name: DataTypes.STRING,
    abv: DataTypes.NUMBER,
    description: DataTypes.STRING,
    brewer: DataTypes.STRING,
    pays: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Bieres',
  });
  return Bieres;
};