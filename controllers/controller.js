var express = require("express");

var router = express.Router();

var model = require("../models/model.js")

router.get("/", function(req, res) {
        var hbsObject = {
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });

router.get("/user", function(req, res) {
        console.log("THIS IS WORKING")
        // res.type('text/plain')
        var hbsObject = {
        };
        res.render("user", hbsObject);
    });

    router.get("/chapter1", function(req, res) {
        console.log("THIS IS WORKING")
        // res.type('text/plain')
        var hbsObject = {
        };
        res.render("chapter1", hbsObject);
    });

module.exports = router;