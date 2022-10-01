const User = require("../models/User");
const jwtt = require("jsonwebtoken");
const { expressjwt: jwt } = require("express-jwt");

//signup
exports.signUp = (req, res) => {
  const { fName, lName, email, password } = req.body;
  if (!fName || !lName || !email || !password) {
    return res.json(400).json({
      error: "All fields are required!",
    });
  }
  const user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    user.salt = undefined;
    user.hashed_password = undefined;
    res.status(200).json({
      user,
    });
  });
};

//sign in
exports.signIn = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.json({
        error: "User with this email doesn't exist, please Sign up!",
      });
    }
  });

  //if user is found, make sure the email and password match

  //create authenticate method in user model
  if (!user.authenticate(password)) {
    return res.status(401).json({
      error: "Email and password doesn't match!",
    });
  }

  //generate a signed token with user id and secret
  const token = jwtt.sign({ _id: user._id }, "rentable");

  //persist the token as 't' in cookie with expiry date
  res.cookie("rentable", token, { expire: new Date() + 1000 });

  //return response with user and token to frontend client
  const { _id, name, e_mail } = user;
  return res
    .json({
      token,
      user: {
        _id,
        e_mail,
        name,
      },
    })
    .status(200);
};

//sign out
exports.signOut = (req, res) => {
  res.clearCookie("rentable");
  res.json({ message: "Signed out successfully!" });
};

//require sign in
exports.requireSignIn = jwt({
  secret: "rentable",
  algorithms: ["HS256"],
  userProperty: "auth",
});

exports.isAuth = (req, res, next) => {
  let user = req.user && req.auth && req.user._id == req.auth._id;
  if (!user) {
    return res.status(403).json({
      error: "Access denied!",
    });
  }
  next();
};
