const { BlogPost, User, Category } = require('../models');

const findAll = async () => {
  const blogPosts = await BlogPost.findAll({
    include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } }, 
    { model: Category, as: 'categories' }],
  });

  return blogPosts;
};

module.exports = {
  findAll,
};
