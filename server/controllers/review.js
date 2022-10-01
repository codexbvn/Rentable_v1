const Review = require("../models/Review");

//Get all the reviews in particular post
exports.reviewByPostId = (req, res, next) => {
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
  let { comment } = req.body;
  let review = new Review(comment);
  review.reviewTo = req.post._id;
  review.reviewBy = req.user._id;
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
