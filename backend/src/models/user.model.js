module.exports = function (sequelize, Sequelize) {
    var User = sequelize.define("users", {
        fname: {
            type: Sequelize.STRING,
            allowNull: false
        },
        lname: {
            type: Sequelize.STRING,
            allowNull: false
        },
        mobile: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false, 
            unique: true
        },
        password: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        password: {
            type: Sequelize.STRING
        },
        group_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        status: {
            type: Sequelize.STRING(50),
            allowNull: false
        }
    });
    User.seq = sequelize;
    return User;
};