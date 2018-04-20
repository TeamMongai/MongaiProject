module.exports = function (sequelize, DataTypes) {
    // There is a lot of data in globalStatsModel, not all of it has to be used
    var globalStatsModel = sequelize.define("globalstat", {
        globalID: {
            type: INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        globalLogins: {
            type: INTEGER,
        },
        globalFailedLogins: {
            type: INTEGER,
        },
        globalUsersRegistered: {
            type: INTEGER,
        },
        globalGamesStarted: {
            type: INTEGER,
        },
        globalGamesCompleted: {
            type: INTEGER,
        },
        globalGoodOutcomes: {
            type: INTEGER,
        },
        globalBadOutcomes: {
            type: INTEGER,
        },
        globalChoicesMade: {

        },
        globalThermonuclearWar: {
            type: boolean,
            defaultValue: true
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
    });
    return globalStatsModel;
};
