
module.exports = function (sequelize, Sequelize) {
    var TransD = sequelize.define("trans_ds", {
        shop_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        tran_m_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        step_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        seq: {
            type: Sequelize.INTEGER,
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
    TransD.seq = sequelize;
    return TransD;
};