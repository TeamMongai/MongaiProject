var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var user = require("../models/userModel.js");

// Create all our routes and set up logic within those routes where required.
router.get("/api/users", function(req, res) {
  //game.all(function(data) {
    //var hbsObject = {
    //  cats: data
    //};
    //console.log(hbsObject);
    //res.render("index", hbsObject);
  //});
  user.all(function(data){

  })
});

router.post("/api/users", function(req, res) {
  user.create([
    "email", "pw"
  ], [
    req.body.email, req.body.pass
  ], function(result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api/users/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  user.update({
    pw: req.body.pass
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/cats/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  cat.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;

