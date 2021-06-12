const axios = require("axios");
const express = require("express");
const Patient = require("../models/patient");

exports.create_patient = async(req, res) => {
    //const result1= await axios.post("https://pacific-earth-91318.herokuapp.com/post/",{path:"https://lit-falls-40108.herokuapp.com/"+req.file.path});
    // console.log(result1.data.result);
    const patient = new Patient({
        MRD: req.body.MRD,
        PatientID: req.body.PatientID,
        ClinicID: req.body.ClinicID,
        DoctorID: req.body.DoctorID,
        Age: req.body.Age,
        PatientName: req.body.PatientName,
        Gender: req.body.Gender,
        // Result: result1.data.result,
        Result: req.body.Gender==="F"?0:1,
        FundusImageURL: req.file?req.file.path:null,
    });
    patient
        .save()
        .then((doc) => {
            res.status(200).json(doc);
        }
        )
        .catch((err) => res.status(500).json({ error: err }));
};

exports.update_patient = (req, res) => {
    // Handle Doctor Description
    const id = req.params.id;
    Patient.findOneAndUpdate({ _id: id }, { $set: req.body })
      .exec()
      .then(() => {
        res.status(200).json({
          message: "Patient status updated",
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
    Patient.find()
      .exec()
      .then((doc) => {
        if (doc.length != 0) res.status(200).json({patient: doc});
        else res.status(404).json({ message: "No Patients" });
      })
      .catch((err) => {
        res.status(500).json({ error: err });
      });
  };
  