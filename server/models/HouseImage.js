const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
  },
  image: {
    data: Buffer,
    contentType: String,
  },
});

imageSchema.methods = {
  addPostId: function (postId) {
    this.postId = postId;
  },
};

module.exports = mongoose.model("Image", imageSchema);
