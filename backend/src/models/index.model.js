var dbConfig = require("../configs/db.config");
var Sequelize = require("sequelize");
var sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});
var db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.users = require("./user.model")(sequelize, Sequelize);
db.groups = require("./group.model")(sequelize, Sequelize);
db.shops = require("./shop.model")(sequelize, Sequelize);
db.brands = require("./brand.model")(sequelize, Sequelize);
db.car_sizes = require("./car_size.model")(sequelize, Sequelize);
db.car_styles = require("./car_style.model")(sequelize, Sequelize);
db.packages = require("./package.model")(sequelize, Sequelize);
db.package_steps = require("./package_step.model")(sequelize, Sequelize);
db.package_prices = require("./package_prices.model")(sequelize, Sequelize);
db.cars = require("./car.model")(sequelize, Sequelize);
db.trans_ms = require("./trans_m.model")(sequelize, Sequelize);
db.trans_ds = require("./trans_d.model")(sequelize, Sequelize);
module.exports = db;