const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  reviewTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
  },
  reviewBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  upVotedBy: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  upVoteCount: {
    type: Number,
    default: 0,
  },
  downVoteCount: {
    type: Number,
    default: 0,
  },
  rating: {
    type: Number,
    default: 0,
  },
  comment: {
    type: String,
    required: true,
  },
});
reviewSchema.methods = {
  addReviewTo: function (postId) {
    this.reviewTo = postId;
  },
  addReviewBy: function (userId) {
    this.reviewBy = userId;
  },
  upVote: function () {
    this.upVoteCount = this.upVoteCount + 1;
  },
  downVote: function () {
    this.downVoteCount = this.downVoteCount + 1;
  },
  addRating: function (rating) {
    this.rating = rating;
  },
  upVoteBy: function (userId) {
    this.upVotedBy.push(userId);
  },
};
module.exports = mongoose.model("Review", reviewSchema);
