const db = require("../models/index.model");
const Shop = db.shops;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = async (req, res) => {
    var tempShop = {
    }

    await Shop.create(tempShop)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Car.",
      });
    });

};
exports.findAll = async (req, res) => {};
exports.findOne = async (req, res) => {};
exports.update = async (req, res) => {};
exports.delete = async (req, res) => {};