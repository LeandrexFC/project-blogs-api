const blogPostsServices = require('../services/post.service');

const getAllblogPost = async (req, res) => {
 const findAllBlogs = await blogPostsServices.findAll();
 return res.status(200).json(findAllBlogs);
};

const getBlogPostById = async (req, res) => {
  const { id } = req.params;
  const { type, message, blogPosts } = await blogPostsServices.findById(id);

  if (type === 'UNKNOW_ID') {
    return res.status(404).json({ message });
  } return res.status(200).json(blogPosts);
};

module.exports = {
  getAllblogPost,
  getBlogPostById,
};