const blogPostsServices = require('../services/post.service');

const getAllblogPost = async (req, res) => {
 const findAllBlogs = await blogPostsServices.findAll();
 return res.status(200).json(findAllBlogs);
};

module.exports = {
  getAllblogPost,
};