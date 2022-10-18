const express = require("express");
const router = express.Router();

const { postById, getAllPosts, createPost } = require("../controllers/posts");

const { requireSignIn, isAuth } = require("../controllers/auth");
const { userById } = require("../controllers/user");

router.get("/posts", getAllPosts, (req, res) => {
  res.json({
    posts: req.posts,
  });
});

router.post("/post/add/:userId", requireSignIn, isAuth, createPost);
router.get("/post/:postId", postById);

router.param("userId", userById);
router.param("postId", postById);
module.exports = router;
