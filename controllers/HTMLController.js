var express = require("express");

var router = express.Router();

var db = require("../models")

var game = require("../controllers/brittanysGame.js")

// RENDER START SCREEN
router.get("/runGame/:id", function (req, res) {
    console.log(req.params.id)
    // console.log(req.params)

    // db.userData.findOne({
    //     where: {

    //     }
    // }).then(function(dbPost){
    //             db.Post.update(req.body,
    //             {
    //               where: {
    //                 id: req.body.id
    //               }
    //             })
    //             .then(function(dbPost) {
    //               res.json(dbPost);
    //             });
    
    //interact with sequelize
    //update user object in db
        //send in what chapter they are on
        // use req.params.id


    if (req.params.id === "5" || req.params.id === 24 || req.params.id === 25 || req.params.id === 31 || req.params.id === 34) {
    // if id = 5, 24, 25, 31, 34
        // then update db and let it know that one of these was chosen
        
        // need a new model for endgame chapters and associate the # of times clicked
            // one column ids, one chap #, one is total # of times clicked
            // based on chap #, retrieve data for that chapter #, the # of times people have already gone there
                // ++
                // update database

        //finds the data
        db.Endings.findOne({
                where: {
                    chapterID: req.params.id
                }
                })
                .then(function(dbPost) { // promise
                    // update / put function
                    console.log(dbPost);
                });
                // db is returning null
                // chapter does not exist
                // prepopulate db with each ending -- sequelize create
                    // seed db with initial default values -- only have to do it once
                // part of game origination -- when game first starts

    }

    var hbsObject = {
        game: game[req.params.id],
        text: game[req.params.id].text,
        choice1: game[req.params.id].choice_array[0],
        choice2: game[req.params.id].choice_array[1],
        choice3: game[req.params.id].choice_array[2]

        

        
    } 
    // console.log(typeof(text))
    res.render("index", hbsObject);
});

// RENDER USER INPUT FORM
router.get("/user", function (req, res) {
    console.log("THIS IS WORKING")
    // res.type('text/plain')
    var hbsObject = {
    };
    res.render("user", hbsObject);
});

// RENDER LOGIN FORM
router.get("/loginPage", function (req, res) {
    console.log("THIS IS WORKING")
    // res.type('text/plain')
    var hbsObject = {
    };
    res.render("loginPage", hbsObject);
});

// RENDER THE FIRST EXPO PAGE
router.get("/", function (req, res) {
    console.log("THIS IS WORKING")
    // res.type('text/plain')
    var hbsObject = {
    };
    res.render("homescreen", hbsObject);
});

// RENDER THE FIRST CHOICE PAGE
router.get("/CHOICEPAGE1", function (req, res) {
    console.log("THIS IS WORKING")
    // res.type('text/plain')
    var hbsObject = {
    };
    res.render("CHOICEPAGE1", hbsObject);
});

// RENDER PATH A
router.get("/pathA", function (req, res) {
    console.log("THIS IS WORKING")
    // res.type('text/plain')
    var hbsObject = {
    };
    res.render("pathA", hbsObject);
});

// RENDER PATH B
router.get("/pathB", function (req, res) {
    console.log("THIS IS WORKING")
    // res.type('text/plain')
    var hbsObject = {
    };
    res.render("pathB", hbsObject);
});


// RENDER PATH C2
router.get("/pathB2", function (req, res) {
    console.log("THIS IS WORKING")
    // res.type('text/plain')
    var hbsObject = {
    };
    res.render("pathB2", hbsObject);
});


// RENDER PATH C
router.get("/pathC", function (req, res) {
    console.log("THIS IS WORKING")
    // res.type('text/plain')
    var hbsObject = {
    };
    res.render("pathC", hbsObject);
});

// RENDER PATH C2
router.get("/pathC2", function (req, res) {
    console.log("THIS IS WORKING")
    // res.type('text/plain')
    var hbsObject = {
    };
    res.render("pathC2", hbsObject);
});

// RENDER PATH D
router.get("/pathD", function (req, res) {
    console.log("THIS IS WORKING")
    // res.type('text/plain')
    var hbsObject = {
    };
    res.render("pathD", hbsObject);
});

// RENDER PATH E
router.get("/pathE", function (req, res) {
    console.log("THIS IS WORKING")
    // res.type('text/plain')
    var hbsObject = {
    };
    res.render("pathE", hbsObject);
});

// RENDER PATH E2
router.get("/pathE2", function (req, res) {
    console.log("THIS IS WORKING")
    // res.type('text/plain')
    var hbsObject = {
    };
    res.render("pathE2", hbsObject);
});


// RENDER PATH F
router.get("/pathF", function (req, res) {
    console.log("THIS IS WORKING")
    // res.type('text/plain')
    var hbsObject = {
    };
    res.render("pathF", hbsObject);
});


// RENDER PATH F2
router.get("/pathF2", function (req, res) {
    console.log("THIS IS WORKING")
    // res.type('text/plain')
    var hbsObject = {
    };
    res.render("pathF2", hbsObject);
});

// RENDER PATH F3
router.get("/pathF3", function (req, res) {
    console.log("THIS IS WORKING")
    // res.type('text/plain')
    var hbsObject = {
    };
    res.render("pathF3", hbsObject);
});



module.exports = router;