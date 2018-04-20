// connection
var port = "8889"

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: port,
    password: 'root',
    database: 'aAuth'
});
connection.connect(function (err) {
    if (!err) {
        console.log("Database is connected ... ");
    } else {
        console.log("Error connecting database ... ");
    }
})

// resiter function

exports.register = function (req, res) {
    // console.log("req",req.body);
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
            });
        }
    });
}


// login

exports.login = function (req, res) {
    
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
}