const express = require("express");
const router = express.Router();

const {
  reviewsByPostId,
  addReview,
  reviewById,
  upVote,
} = require("../controllers/review");
const { requireSignIn, isAuth } = require("../controllers/auth");
const { postById } = require("../controllers/posts");
const { userById } = require("../controllers/user");

router.get(
  "/post/reviews/get/:postId/:userId",
  requireSignIn,
  isAuth,
  reviewsByPostId,
  (req, res) => {
    res
      .json({
        reviews: req.reviews,
      })
      .status(200);
  }
);

router.post(
  "/post/review/add/:postId/:userId",
  requireSignIn,
  isAuth,
  addReview
);

router.put(
  "/post/review/update/:reviewId/:userId",
  requireSignIn,
  isAuth,
  upVote,
  (req, res) => {
    res.json({
      review: req.review,
    });
  }
);
router.param("postId", postById);
router.param("userId", userById);
router.param("reviewId", reviewById);
module.exports = router;
