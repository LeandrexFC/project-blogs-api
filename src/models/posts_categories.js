/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */


module.exports = (sequelize, DataTypes) => {
  const postCategories = sequelize.define('postsCategories', {
    // postId: DataTypes.INTEGER,
    // categoryId: DataTypes.INTEGER
  }, {
    tableName: 'posts_categories',
    underscored: true,
    timestamps: false,
  })

  postCategories.associate = ({ Module, Course }) => {
    Course.belongsToMany(Module, { 
      as: 'categoriesPosts',
      through: postCategories,
      foreignKey: 'id',
      otherKey: 'id',
     })

     Module.belongsToMany(Course, {
      as: 'categoryId',
      through: postCategories,
      foreignKey: 'id',
      otherKey: 'id'
     })

  }

  return postCategories;
};