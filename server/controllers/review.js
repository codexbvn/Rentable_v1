const Review = require("../models/Review");
const _ = require("lodash");

//Get all the reviews in particular post
exports.reviewsByPostId = (req, res, next) => {
  Review.find({ reviewTo: req.post._id }).exec((err, reviews) => {
    if (err || !reviews) {
      return res.status(400).json({
        error: "No any reviews for this post!",
      });
    }
    req.reviews = reviews;
    next();
  });
};

//Add review to any post
exports.addReview = (req, res) => {
  let review = new Review(req.body);
  review.addReviewTo(req.post._id);
  review.addReviewBy(req.user._id);
  review.save((err, result) => {
    if (err) {
      return res.status(400).json({
        error: "Sorry, could not add review!",
      });
    }
    return res.status(200).json({
      success: "Review added successfully!",
      result,
    });
  });
};

//Get review by id
exports.reviewById = (req, res, next, id) => {
  Review.findById(id).exec((err, review) => {
    if (err || !review) {
      res.json({
        error: "Could not find review!",
      });
    }
    req.review = review;
    next();
  });
};

//Add upvote route
exports.upVote = (req, res, next) => {
  let review = req.review;
  let countVote = req.review.upVoteCount + 1;
  const updatedReview = _.merge(review, req.body, {
    upVoteCount: countVote,
  });
  updatedReview.upVoteBy(req.user._id);
  console.log(updatedReview);
  review = updatedReview;
  review.save((err, result) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    req.review = result;
    next();
  });
};
