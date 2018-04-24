var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;

var app = express();

//include the models
var db = require("./models");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/HTMLcontroller.js");
var routes2 = require("./controllers/userLoginController.js"); 

app.use(routes);
app.use(routes2);

db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("App now listening at localhost:" + PORT);
  });
});