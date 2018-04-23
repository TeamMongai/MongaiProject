app.get("/chapter/:chapterid", function (req, res) {
    var chosenChapter = req.params.chapterid

            res.render("chapt")

        }