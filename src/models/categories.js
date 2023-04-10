'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      Category.belongsToMany(models.BlogPost, {
        through: 'PostCategory',
        foreignKey: 'category_id',
      });
    }
  };
  Category.init({
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'category',
    underscored: true,
  });
  return Category;
};
