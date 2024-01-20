module.exports = function (sequelize, Sequelize) {
    var Group = sequelize.define("groups", {
        name: {
            type: Sequelize.STRING(200),
            allowNull: false
        },
        desc: {
            type: Sequelize.STRING,
        },
        status: {
            type: Sequelize.STRING(50),
            allowNull: false
        }
    });
    Group.seq = sequelize;
    return Group;
};