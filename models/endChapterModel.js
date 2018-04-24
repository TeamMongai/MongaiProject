module.exports = function (sequelize, DataTypes) {
    var Endings = sequelize.define("Endings", {
        _id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        chapterID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        numOfTimes: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        }
    })
    return Endings;
}

//  // Get route for retrieving a single post
//  app.get("/api/posts/:id", function(req, res) {
//     db.Post.findOne({
//       where: {
//         id: req.params.id
//       }
//     })
//       .then(function(dbPost) {
//         res.json(dbPost);
//       });
//   });

 // Get route for retrieving a single post
//   app.get("/api/posts/:id", function(req, res) {
//     db.Post.update(req.body,
//     {
//       where: {
//         id: req.body.id
//       }
//     })
//     .then(function(dbPost) {
//       res.json(dbPost);
//     });