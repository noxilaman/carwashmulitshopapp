const db = require("../models/index.model");
const Group = db.groups;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = async (req, res) => {
    var tempGroup = {
        name: req.body.name,
        desc: req.body.desc,
        status: 'Active'
    }

    await Group.create(tempGroup)
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