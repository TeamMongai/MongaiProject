module.exports = function (sequelize, DataTypes) {
    // There is a lot of data in userData, not all of it has to be used
    var userData = sequelize.define("User", {
        userID: {
            type: INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true,  // checks for email format (user@host.com)
                msg: "Must be an email address such as user@host.com",
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        numGamesCompleted: {
            type: INTEGER,
        },
        numLogins: {
            type: INTEGER,
        },
        numDeaths: {
            type: INTEGER, 
        },
        numEmailsSent: {
            type: INTEGER,
        },
        numChoicesMade: {
            type: INTEGER,
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
    });
    return userData;
};
