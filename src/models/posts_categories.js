/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */


module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
     postId: DataTypes.INTEGER,
     categoryId: DataTypes.INTEGER
  }, {
    tableName: 'posts_categories',
    underscored: true,
    timestamps: false,
  })

  PostCategory.associate = ({ BlogPosts, Categories }) => {
    Categories.belongsToMany(BlogPosts, { 
      as: 'categoriesPosts',
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
     })

     BlogPosts.belongsToMany(Categories, {
      as: 'categoryId',
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId'
     })

  }

  return PostCategory;
};