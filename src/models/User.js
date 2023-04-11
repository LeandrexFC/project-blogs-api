/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */

// MODEL SEMPRE EM CAMEL CASE MENOS O TABLE NAME.

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: DataTypes.INTEGER,
    displayName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    tableName: 'users',
    underscored: true,
  });
  return User;
};
