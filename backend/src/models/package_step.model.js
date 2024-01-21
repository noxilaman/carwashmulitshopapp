module.exports = function (sequelize, Sequelize) {
    var PackageStep = sequelize.define("package_steps", {
        shop_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        package_id: {
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
        seq: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        status: {
            type: Sequelize.STRING(50),
            allowNull: false
        }
    });
    PackageStep.seq = sequelize;
    return PackageStep;
};