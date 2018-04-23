module.exports = function (sequelize, DataTypes) {
    // There is a lot of data in globalStatsModel, not all of it has to be used
    var globalStatsModel = sequelize.define("globalstat", {
        globalID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        globalLogins: {
            type: DataTypes.INTEGER,
        },
        globalFailedLogins: {
            type: DataTypes.INTEGER,
        },
        globalUsersRegistered: {
            type: DataTypes.INTEGER,
        },
        globalGamesStarted: {
            type: DataTypes.INTEGER,
        },
        globalGamesCompleted: {
            type: DataTypes.INTEGER,
        },
        globalGoodOutcomes: {
            type: DataTypes.INTEGER,
        },
        globalBadOutcomes: {
            type: DataTypes.INTEGER,
        },
        globalChoicesMade: {
            type: DataTypes.INTEGER,
        },
        // globalThermonuclearWar: {
        //     type: DataTypes.boolean,
        //     defaultValue: true
        // },
        // createdAt: DataTypes.Sequelize.DATE,
        // updatedAt: DataTypes.Sequelize.DATE,
    });
    return globalStatsModel;
};
