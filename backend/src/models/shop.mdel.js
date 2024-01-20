module.exports = function (sequelize, Sequelize) {
    var Shop = sequelize.define("users", {
        name: {
            type: Sequelize.STRING(200),
            allowNull: false
        },
        desc: {
            type: Sequelize.STRING,
            allowNull: false
        },
        mobile: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        logo: {
            type: Sequelize.STRING,
        },
        picture: {
            type: Sequelize.STRING,
        },
        location: {
            type: Sequelize.STRING
        },
        googlemap: {
            type: Sequelize.STRING
        },
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        status: {
            type: Sequelize.STRING(50),
            allowNull: false
        }
    });
    Shop.seq = sequelize;
    return Shop;
};