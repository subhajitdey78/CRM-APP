//controller for doctors
const db = require('../models');

// Defining methods for the doctorsController
module.exports = {
    findAll: function (req, res) {
        db.Appointment
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => console.log('the findall doctor is not working in doctorscontroller.js error: ' + err));
        //res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Appointment
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => console.log('the findbyid doctor is not working in doctorscontroller.js error: ' + err));
        //res.status(422).json(err));
    },
    create: function (req, res) {
        db.Appointment
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err =>
                console.log('the create doctor is not working in doctorscontroller.js error: ' + err));
        //res.status(422).json(err));
    },
    update: function (req, res) {
        db.Appointment
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => console.log('the update doctor is not working in doctorscontroller.js error: ' + err));
        //res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Appointment
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => console.log('the remove doctor is not working in doctorscontroller.js error: ' + err));
        //res.status(422).json(err));
    }
};