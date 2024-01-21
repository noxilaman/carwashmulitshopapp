module.exports = function (sequelize, Sequelize) {
    var CarStyle = sequelize.define("car_styles", {
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
    CarStyle.seq = sequelize;
    return CarStyle;
};