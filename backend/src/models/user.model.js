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
            references: {
                // This is a reference to another model
                model: Group,
          
                // This is the column name of the referenced model
                key: 'id',
          
                // With PostgreSQL, it is optionally possible to declare when to check the foreign key constraint, passing the Deferrable type.
                deferrable: Deferrable.NOT
                // Options:
                // - `Deferrable.INITIALLY_IMMEDIATE` - Immediately check the foreign key constraints
                // - `Deferrable.INITIALLY_DEFERRED` - Defer all foreign key constraint check to the end of a transaction
                // - `Deferrable.NOT` - Don't defer the checks at all (default) - This won't allow you to dynamically change the rule in a transaction
              }
        },
        status: {
            type: Sequelize.STRING(50),
            allowNull: false
        }
    });
    User.seq = sequelize;
    return User;
};