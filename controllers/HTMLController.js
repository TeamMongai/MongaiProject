var express = require("express");

var router = express.Router();

var model = require("../models/model.js")

// RENDER START SCREEN
router.get("/", function(req, res) {
        var hbsObject = {
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });

// RENDER USER INPUT FORM
router.get("/user", function(req, res) {
        console.log("THIS IS WORKING")
        // res.type('text/plain')
        var hbsObject = {
        };
        res.render("user", hbsObject);
    });

    // RENDER THE FIRST EXPO PAGE
    router.get("/EXPO1", function(req, res) {
        console.log("THIS IS WORKING")
        // res.type('text/plain')
        var hbsObject = {
        };
        res.render("EXPO1", hbsObject);
    });

    // RENDER THE FIRST CHOICE PAGE
    router.get("/CHOICEPAGE1", function(req, res) {
        console.log("THIS IS WORKING")
        // res.type('text/plain')
        var hbsObject = {
        };
        res.render("CHOICEPAGE1", hbsObject);
    });

    // RENDER PATH A
    router.get("/pathA", function(req, res) {
        console.log("THIS IS WORKING")
        // res.type('text/plain')
        var hbsObject = {
        };
        res.render("pathA", hbsObject);
    });

    // RENDER PATH B
    router.get("/pathB", function(req, res) {
        console.log("THIS IS WORKING")
        // res.type('text/plain')
        var hbsObject = {
        };
        res.render("pathB", hbsObject);
    });

    // RENDER PATH C
    router.get("/pathC", function(req, res) {
        console.log("THIS IS WORKING")
        // res.type('text/plain')
        var hbsObject = {
        };
        res.render("pathC", hbsObject);
    });

module.exports = router;