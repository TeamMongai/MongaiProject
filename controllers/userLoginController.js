// This controller is used to register new users and autheticate

console.log("userLoginController checking in!")

var express = require("express");

var router = express.Router();

var db = require("../models")


// Routes and controller functions:
console.log("exports in userLoginController!")
// LOGIN - CONVERTED TO SEQUALIZE - Need to test
router.post("/api/login", function (req, res) {
    var email = req.body.email; //User input email
    var password = req.body.password; //User input password
    console.log("userLoginController: Checking user login: ", email, password)
    console.log("db is", db.User);
    //Sequalized query
    db.User.findOne({
        where: {
            email: req.body.email
        },
    }).then(function (results) {

        console.log("results is: ", results.password)
        console.log("userLoginController: Password from DB ", results.password);

        if (results.password == password) {
            console.log("userLoginController: login sucessfull")

            res.send({
                "code": 200,
                "success": "userLoginController: login sucessfull",  
                "next": "/" + results.id + "/runGame/" + results.userChapterLocation
            // "/:userID/runGame/:id"
            });
        }
        else if (results.password != password) {
            console.log("poopy")
            $("myModal").modal();
        } 
        else {
            console.log("login failed");
            res.send({
                "code": 204,
                "success": "userLoginController: Email and password does not match"
            });
        }
    });
});

// REGISTER - Converted to sequalize- Need to test
router.post('/api/register', function (req, res) {
    console.log("userLoginController, api/register!")
    db.User.create({
        email: req.body.email,
        password: req.body.password,
        userFirstName: req.body.first_name,
        userLastName: req.body.last_name,
    })
        .then(function (results) {
            console.log("userLoginController, new user registered: ", results.dataValues.email);
            res.sendStatus(200)
        });;
});



module.exports = router;