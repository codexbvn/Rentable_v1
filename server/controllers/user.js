const User = require("../models/User");

exports.userById = (req, res, next, id) => {
  User.findById({ _id: id }).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "User not found!",
      });
    }
    req.user = user;
    next();
  });
};
