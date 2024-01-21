module.exports = function (sequelize, Sequelize) {
    var PackagePrice = sequelize.define("package_prices", {
        shop_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        package_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        car_size_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        price: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        status: {
            type: Sequelize.STRING(50),
            allowNull: false
        }
    });
    PackagePrice.seq = sequelize;
    return PackagePrice;
};