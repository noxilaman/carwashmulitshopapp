module.exports = function (sequelize, Sequelize) {
    var Car = sequelize.define("cars", {
        license_code: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        license_city: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        brand_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        car_size_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        car_style_id: {
            type: Sequelize.INTEGER
        },
        desc: {
            type: Sequelize.STRING,
            allowNull: false
        },
        owner: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        mobile: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        picture: {
            type: Sequelize.STRING,
        },
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        shop_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        status: {
            type: Sequelize.STRING(50),
            allowNull: false
        }
    });
    Car.seq = sequelize;
    return Car;
};