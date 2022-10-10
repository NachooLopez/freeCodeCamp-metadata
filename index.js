var express = require("express");
var cors = require("cors");
const routes = require("./routes.js");
require("dotenv").config();

var app = express();

app.use(cors());
app.use("/public", express.static(process.cwd() + "/public"));

app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

app.use("/api/fileanalyse", routes);

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log(`Your app is listening at http://localhost:${port}`);
});
