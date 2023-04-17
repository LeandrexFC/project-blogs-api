const { BlogPost, User, Category } = require('../models');

const findAll = async () => {
  const blogPosts = await BlogPost.findAll({
    include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } }, 
    { model: Category, as: 'categories' }],
  });
  return blogPosts;
};

const findById = async (id) => {
  const blogPosts = await BlogPost.findOne({
    where: { id },
    attributes: { exclude: ['userId'] },
    include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } }, 
    { model: Category,
    as: 'categories',
    attributes: ['id', 'name'],
    through: { attributes: [] }, 
    nested: true }],
  });
  if (!blogPosts) {
    return { type: 'UNKNOW_ID', message: 'Post does not exist' };
  }
  return { type: null, message: '', blogPosts };
};

module.exports = {
  findAll,
  findById,
};
