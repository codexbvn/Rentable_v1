const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxlength: 56,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  price: {
    type: String,
    required: true,
  },
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});

postSchema.methods = {
  addUserId: function (userId) {
    this.postedBy = userId;
  },
  addReview: function (reviewId) {
    this.reviews.push(reviewId);
  },
};
module.exports = mongoose.model("Post", postSchema);
