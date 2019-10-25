const express = require("express");
const cors = require("cors");
const path = require("path");
const mysql = require("mysql");
const config = require("config");
const app = express();

// Cors
app.use(cors());

const db = mysql.createConnection(config.get("con"));

db.connect(err => {
  if (err) console.log(err);
  else console.log("Connected to database");
});
global.db = db;
// Init Middleware
app.use(express.json({ extended: false, limit: "50mb" }));

/*app.use("/images", express.static("images"));

// Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/forget", require("./routes/api/forget"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/images", require("./routes/api/images"));*/
app.use("/api/articles", require("./routes/api/articles"));

// Set static folder
/*app.use(express.static("client/build"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});*/

const PORT = process.env.PORT || 5000;

app.listen(PORT, function() {
  console.log("Example app listening on port " + PORT);
});
