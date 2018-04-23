// This controller is used to register new users and autheticate

console.log("userLoginController checking in!")

var express = require("express");

var router = express.Router();

var db = require("../models/") // I think with sequalize we need to just require models...

//May need to move checkUserChapterValue() inside the router statements due to email scope issues - need to test
// function checkUserChapterValue(email) {
//     connection.query('SELECT * FROM users WHERE email = ?', [email], function (error, results, fields) {
//         console.log("userLoginController: checkUserChapterValue: checking userChapterLocation");
//         var chapter = results[0].userChapterLocation;
//         console.log("userLoginController: checkUserChapterValue: User chapter value is ", chapter);
//         if (results[0].userChapterLocation) {
//             //route to chapter 
//         } else {
//             console.log("userLoginController: checkUserChapterValue: Unable to find chapter value!");
//         };
//     });
// };


module.exports = function (loginRegApp) {
    // Routes and controller functions:
    console.log("exports in userLoginController!")
    // LOGIN - CONVERTED TO SEQUALIZE - Need to test
    router.post("/api/login", function (req, res) {
        var email = req.body.email; //User input email
        var password = req.body.password; //User input password
        console.log("userLoginController: Checking user login: ", email, password)
        //Sequalized query
        db.model.findOne({
            where: {
                email: req.body.email
            },
        }).then(function (res) {
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
                        // checkUserChapterValue(email); // Function below checks the user chapter value, may need to move this inside the router statments due to scope
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

    // REGISTER - Converted to sequalize- Need to test
    router.post('/api/register', function (req, res) {
        console.log("userLoginController, api/register!")
        db.model.create({
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
            // checkUserChapterValue(email); // checkUserChapterValue() checks the user chapter value, may need to move this inside the router statments due to scope
        }
    });


};