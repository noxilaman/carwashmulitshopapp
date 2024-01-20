const db = require("./src/models/index.model");
db.sequelize.sync()
  .then(() => {
    //console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });