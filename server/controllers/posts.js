const Post = require("../models/HousePost");

//get post by id
exports.postById = (req, res, next, id) => {
  Post.findById(id).exec((err, post) => {
    if (err || !post) {
      return res.status(400).json({
        error: "Post not found!",
      });
    }
    req.post = post;
    next();
  });
};

//get all posts
exports.getAllPosts = (req, res, next) => {
  Post.find({}).exec((err, posts) => {
    if (err || !posts) {
      return res.status(400).json({
        error: "No posts available!",
      });
    }
    req.posts = posts;
    next();
  });
};

//create a post
exports.createPost = (req, res) => {
  let { title, description, location, price } = req.body;
  if (!title || !description || !location || !price) {
    return res.status(400).json({
      error: "All fields are required!",
    });
  }
  let post = new Post(req.body);
  post.addUserId(req.user._id);
  post.save((err, result) => {
    if (err || !result) {
      res
        .json({
          error: "Could not add your post!",
        })
        .status(400);
    }
    res
      .json({
        success: "Successfully added your post!",
        post: result,
      })
      .status(200);
  });
};
