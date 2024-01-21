module.exports = function (sequelize, Sequelize) {
    var Brand = sequelize.define("brands", {
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
    Brand.seq = sequelize;
    return Brand;
};