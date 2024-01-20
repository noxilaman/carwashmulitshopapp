const db = require("../models/index.model");
const User = db.users;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = async (req, res) => {
    var encyptedPassword = await bcrypt.hash(req.body.password, 10);
    var tempUser = {
        fname: req.body.fname,
        lname: req.body.lname,
        mobile: req.body.mobile,
        email: req.body.email,
        password: encyptedPassword,
        token: '',
        group_id: 1,
    }

    await User.create(tempUser)
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