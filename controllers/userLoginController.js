// This controller is used to register new users and autheticate

var express = require("express");

var router = express.Router();

var model = require("../models/") // I think with sequalize we need to just require models...

router.post("/login", function (req, res) {
    var email = req.body.email; //User input email
    var password = req.body.password; //User input password
    console.log("userLoginController: Checking login: ", email, password)
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
                        //////////
                        // Check user chapter value in DB and direct user to that chapter
                        ///////////
                    });
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

router.post('/register', function (req, res) {
    var today = new Date();
    var users = {
        "first_name": req.body.first_name,
        "last_name": req.body.last_name,
        "email": req.body.email,
        "password": req.body.password,
        "created": today,
        "modified": today
    }
    connection.query('INSERT INTO users SET ?', users, function (error, results, fields) {
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
                //////////
                // Check user chapter value in DB and direct user to that chapter
                ///////////
            });
        }
    });
});

function checkUserChapterValue(){
    connection.query('SELECT * FROM users WHERE email = ?', [email], function (error, results, fields) {
        // if results[0].
    });
}

