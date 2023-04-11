/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */

module.exports = (sequelize, DataTypes) => {
  const Category  = sequelize.define('Category', { // nome da model em singular e pascal case
    name: DataTypes.STRING,
    id: DataTypes.INTEGER,
  }, {
    sequelize,
    tableName: 'categories',
    underscored: true,
  });
  return Category;
};
