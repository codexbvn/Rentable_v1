const express = require("express");
const cors = require("cors");
const dbConfig = require("./database/db.config");
const app = express();

let corsOptions = {
  origin: "http://localhost:3000",
};

//middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//add configuration to database
var sql = require("mysql2");

// connect to your database
sql.connect(dbConfig, function (err) {
  if (err) console.log(err);

  // create Request object
  var request = new sql.Request();

  // query to the database and get the records
  request.query("select * from Student", function (err, recordset) {
    if (err) console.log(err);

    // send records as a response
    res.send(recordset);
  });
});
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
