module.exports = function (sequelize, DataTypes) {
  var user = sequelize.define("user", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    pw: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8, 32]
      }
    }
  });
}