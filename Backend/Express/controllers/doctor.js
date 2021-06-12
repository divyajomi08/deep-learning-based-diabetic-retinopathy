const express = require("express");
const Doctor = require("../models/doctor");

exports.create_doctor = (req, res) => {
    const doctor = new Doctor({
        ClinicID : req.body.ClinicID,
        Email: req.body.Email,
        Password: req.body.Password,
        Name : req.body.Name,
        DoctorID : req.body.DoctorID
    });
    doctor
        .save()
        .then((doc) => {
            res.status(200).json(doc);
        }
        )
        .catch((err) => res.status(500).json({ error: err }));
};

exports.update_doctor = (req, res) => {
    const id = req.params.id;
    Doctor.findOneAndUpdate({ _id: id }, { $set: req.body })
      .exec()
      .then(() => {
        res.status(200).json({
          message: "Doctor details updated",
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      });
  };
  
  exports.get_all = (req, res) => {
    Doctor.find()
      .exec()
      .then((doc) => {
        if (doc.length != 0) res.status(200).json({doctor: doc});
        else res.status(404).json({ message: "No Doctors" });
      })
      .catch((err) => {
        res.status(500).json({ error: err });
      });
  };
  