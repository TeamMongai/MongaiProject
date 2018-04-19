var express = require("express");

var router = express.Router();

var model = require("../models/model.js")

router.get("/", function(req, res) {
        var hbsObject = {
        };
        console.log(hbsObject);
        res.render("user", hbsObject);
    });

module.exports = router;