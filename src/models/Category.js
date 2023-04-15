/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */

module.exports = (sequelize, DataTypes) => {
  const Category  = sequelize.define('Category', { // nome da model em singular e pascal case
    name: DataTypes.STRING,
     id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
  }, {
    sequelize,
    tableName: 'categories',
    underscored: true,
    timestamps: false,
  });
  return Category;
};
