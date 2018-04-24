

module.exports = function (sequelize, DataTypes) {
    // There is a lot of data in userData, not all of it has to be used
    var User = sequelize.define("User", {
        // userID: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     primaryKey: true,
        // },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            // validate: {
            //     isEmail: true,  // checks for email format (user@host.com)
            //     msg: "Must be an email address such as user@host.com",
            // }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userChapterLocation: { // This is the users location in the story based on chapter number, the default is 1 to start the game
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        userFirstName: {
            type: DataTypes.STRING,
        },
        userLastName: {
            type: DataTypes.STRING,
        },
        numGamesCompleted: {
            type: DataTypes.INTEGER,
        },
        numLogins: {
            type: DataTypes.INTEGER,
        },
        numDeaths: {
            type: DataTypes.INTEGER,
        },
        numEmailsSent: {
            type: DataTypes.INTEGER,
        },
        numChoicesMade: {
            type: DataTypes.INTEGER,
        },
        // createdAt: DataTypes.Sequelize.DATE,
        // updatedAt: DataTypes.Sequelize.DATE,
    });
    return User;
};
