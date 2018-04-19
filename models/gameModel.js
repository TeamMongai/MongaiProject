module.exports = function (sequelize, DataTypes) {
    var decision = sequelize.define("game", {
        choice1: {
            type: DataTypes.INTEGER
        },
        choice2: {
            type: DataTypes.INTEGER
        },
        choice3: {
            type: DataTypes.INTEGER
        }
    })
}