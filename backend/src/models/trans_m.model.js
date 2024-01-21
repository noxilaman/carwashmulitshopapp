
module.exports = function (sequelize, Sequelize) {
    var TransM = sequelize.define("trans_ms", {
        shop_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        package_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        car_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        price_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        price: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        arr_time: {
            type: Sequelize.DATE
        },
        start_time: {
            type: Sequelize.DATE
        },
        end_time: {
            type: Sequelize.DATE
        },
        recv_time: {
            type: Sequelize.DATE
        },
        desc: {
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
    TransM.seq = sequelize;
    return TransM;
};