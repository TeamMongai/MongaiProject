var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var user = require("../models/userModel.js");

// Create all our routes and set up logic within those routes where required.
router.get("/api/users", function (req, res) {
  //game.all(function(data) {
  //var hbsObject = {
  //  cats: data
  //};
  //console.log(hbsObject);
  //res.render("index", hbsObject);
  //});
  user.all(function (data) {

  })
});

router.post("/api/users", function (req, res) {
  user.create([
    "email", "pw"
  ], [
      req.body.email, req.body.pass
    ], function (result) {
      res.json({ id: result.insertId });
    });
});

router.put("/api/users/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  user.update({
    pw: req.body.pass
  }, condition, function (result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/cats/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  cat.delete(condition, function (result) {
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



/// Mark's login code as of 4/19 14:20 PM  
/// Note that this requires an SQL conection to work
/// Tested with postman  4/19

//REGISTER CDOE
router.post('/register', function (req, res) {
  // Variables from the user to check:
  var email = req.body.email;
  var password = req.body.password; // Console log of user input to debug
  console.log("Checking login: ", email, password); // Query to check if hte user email is present
  connection.query('SELECT * FROM users WHERE email = ?', [email], function (error, results, fields) {
    console.log("Results password ", results[0].password); // To debug what the SQL query finds as a password
    if (error) { // If error from the SQL server
      res.send({
        "code": 400,
        "failed": "error ocurred"
      })
    } else { // Else if an email does match in the DB check the password
      if (results.length > 0) {
        if (results[0].password == password) {
          console.log("login sucessfull")
          res.send({
            "code": 200,
            "success": "login sucessfull"
          });
        }
        else { // Else if an email does not match the DB
          res.send({
            "code": 204,
            "success": "Email and password does not match"
          });
        }
      }
      else {
        res.send({
          "code": 204,
          "success": "Email does not exits"
        });
      }
    }
  });
});

//LOGIN CODE
router.post('/login', function (req, res) {
  var email = req.body.email;
  var password = req.body.password;

  console.log("Checking login: ", email, password)
  
  connection.query('SELECT * FROM users WHERE email = ?', [email], function (error, results, fields) {
      console.log("Results password ", results[0].password);
      if (error) {
          // console.log("error ocurred",error);
          res.send({
              "code": 400,
              "failed": "error ocurred"
          })
      } else {

          if (results.length > 0) {
              if (results[0].password == password) {
                  console.log("login sucessfull")
                  res.send({
                      "code": 200,
                      "success": "login sucessfull"
                  });
              }
              else {
                  res.send({
                      "code": 204,
                      "success": "Email and password does not match"
                  });
              }
          }
          else {
              res.send({
                  "code": 204,
                  "success": "Email does not exits"
              });
          }
      }
  });

});
