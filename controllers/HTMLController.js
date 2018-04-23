var express = require("express");

var router = express.Router();

var model = require("../models/model.js")

var game = require("../controllers/michaelsGame2.js")

// RENDER START SCREEN
router.get("/", function (req, res) {
    var hbsObject = {
        game: game[0],
        text: game[0].text,
        choices: JSON.stringify(game[0].choice_array)
    } 
    console.log(hbsObject);
    res.render("homescreen", hbsObject);
});

// RENDER USER INPUT FORM
router.get("/user", function (req, res) {
    console.log("THIS IS WORKING")
    // res.type('text/plain')
    var hbsObject = {
    };
    res.render("user", hbsObject);
});

// RENDER THE FIRST EXPO PAGE
router.get("/EXPO1", function (req, res) {
    console.log("THIS IS WORKING")
    // res.type('text/plain')
    var hbsObject = {
    };
    res.render("EXPO1", hbsObject);
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