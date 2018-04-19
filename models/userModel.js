module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("users", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    pw: {

    }
  });
}