// This controller is used to register new users and autheticate

var express = require("express");

var router = express.Router();

var db = require("../models/") // I think with sequalize we need to just require models...

//May need to move checkUserChapterValue() inside the router statements due to email scope issues
function checkUserChapterValue(email) {
    connection.query('SELECT * FROM users WHERE email = ?', [email], function (error, results, fields) {
        console.log("userLoginController: checkUserChapterValue: checking userChapterLocation");
        var chapter = results[0].userChapterLocation;
        console.log("userLoginController: checkUserChapterValue: User chapter value is ", chapter);
        if (results[0].userChapterLocation) {
            //route to chapter 
        } else {
            console.log("userLoginController: checkUserChapterValue: Unable to find chapter value!");
        };
    });
};

// Routes and controller functions:



// LOGIN - NOT YET CONVERTED TO SEQUALIZE - Converting
router.get("/login", function (req, res) {
    var email = req.body.email; //User input email
    var password = req.body.password; //User input password
    console.log("userLoginController: Checking user login: ", email, password)






    connection.query('SELECT * FROM users WHERE email = ?', [email], function (error, results, fields) {
        console.log("userLoginController: Password from DB ", results[0].password);
        if (error) {
            res.send({
                "code": 400,
                "failed": "error ocurred"
            })
        } else {
            if (results.length > 0) {
                if (results[0].password == password) {
                    console.log("userLoginController: login sucessfull")
                    res.send({
                        "code": 200,
                        "success": "userLoginController: login sucessfull"

                    });
                    //////////
                    // Check user chapter value in DB and direct user to that chapter
                    ///////////
                    checkUserChapterValue(email); // Function below checks the user chapter value, may need to move this inside the router statments due to scope
                }
                else {
                    res.send({
                        "code": 204,
                        "success": "userLoginController: Email and password does not match"
                    });
                }
            }
            else {
                res.send({
                    "code": 204,
                    "success": "userLoginController: Email does not exits"
                });
            }
        }
    });
});


// REGISTER - Need to test
router.post('/register', function (req, res) {
    db.userDataModel.create({
        email: req.body.email,
        password: req.body.password,
        userFirstName: req.body.first_name,
        userLastName: req.body.last_name,
    });
    if (error) {
        console.log("error ocurred", error);
        res.send({
            "code": 400,
            "failed": "error ocurred"
        })
    } else {
        console.log('The solution is: ', results);
        res.send({
            "code": 200,
            "success": "user registered sucessfully"
        });
        //////////
        // Check user chapter value in DB and direct user to that chapter
        ///////////
        checkUserChapterValue(email); // Function below checks the user chapter value, may need to move this inside the router statments due to scope
    }
});

