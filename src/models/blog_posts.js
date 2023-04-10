'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BlogPost extends Model {
    static associate(models) {
      BlogPost.belongsTo(models.User, {
        foreignKey: 'user_id',
      });
      BlogPost.belongsToMany(models.Category, {
        through: 'PostCategory',
        foreignKey: 'post_id',
      });
    }
  };
  BlogPost.init({
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'BlogPost',
    underscored: true,
  });
  return BlogPost;
};
