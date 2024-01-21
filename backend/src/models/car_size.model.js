module.exports = function (sequelize, Sequelize) {
    var CarSize = sequelize.define("car_sizes", {
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
    CarSize.seq = sequelize;
    return CarSize;
};