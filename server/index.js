const express = require("express");
const cors = require("cors");
const app = express();

let corsOptions = {
  origin: "http://localhost:3000",
};

//middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Rentable Applicaton!",
  });
});

//Setup port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}.`);
});
