const express = require("express");
const router = express.Router();

const { postById, getAllPosts, createPost } = require("../controllers/posts");

const { requireSignIn, isAuth } = require("../controllers/auth");
const { userById } = require("../controllers/user");

router.get("/houses", getAllPosts, (req, res) => {
  res.json({
    posts: req.posts,
  });
});

router.post("/house/add/:userId", requireSignIn, isAuth, createPost);
router.get("/house/:postId", postById);

router.param("userId", userById);
router.param("postId", postById);
module.exports = router;
