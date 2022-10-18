const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
require("dotenv").config();

//import routes from directory
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const postRoutes = require("./routes/posts");
const reviewRoutes = require("./routes/review");
//app
const app = express();

//configured database
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected sucessfully!"))
  .catch((err) => {
    console.log(err);
  });

//middlewares
app.use(morgan("dev"));
app.use(cors({ origin: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

//route middlewares
app.use(authRoutes);
app.use(userRoutes);
app.use(postRoutes);
app.use(reviewRoutes);
//Setup port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}.`);
});
