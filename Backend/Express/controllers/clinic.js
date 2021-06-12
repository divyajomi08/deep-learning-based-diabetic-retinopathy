const express = require("express");
const Clinic = require("../models/clinic");

exports.create_clinic = (req, res) => {
    const clinic = new Clinic({
        ClinicID : req.body.ClinicID,
        ClinicPassword: req.body.ClinicPassword,
       
    });
    clinic
        .save()
        .then((doc) => {
            res.status(200).json(doc);
        }
        )
        .catch((err) => res.status(500).json({ error: err }));
};

exports.get_all = (req, res) => {
    Clinic.find()
      .exec()
      .then((doc) => {
        if (doc.length != 0) res.status(200).json({clinic: doc});
        else res.status(404).json({ message: "No Clinics" });
      })
      .catch((err) => {
        res.status(500).json({ error: err });
      });
  };
  