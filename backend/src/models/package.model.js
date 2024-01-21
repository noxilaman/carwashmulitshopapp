module.exports = function (sequelize, Sequelize) {
    var Package = sequelize.define("packages", {
        shop_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
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
    Package.seq = sequelize;
    return Package;
};