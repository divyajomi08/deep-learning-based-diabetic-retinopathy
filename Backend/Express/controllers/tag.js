const express = require("express");
const Tag = require("../models/tag");

exports.create_tag = (req, res) => {
    const tag = new Tag({
        PatientID: req.body.PatientID,
        ClientID: req.body.ClientID,
        DoctorID: req.body.DoctorID,
        Result: req.body.Result,
        FundusImageURL: req.body.FundusImageURL,
    });
    tag
        .save()
        .then((doc) => {
            res.status(200).json(doc);
        }
        )
        .catch((err) => res.status(500).json({ error: err }));
};

exports.update_tag = (req, res) => {
    // Handle Doctor Description
    const id = req.params.id;
    Tag.findOneAndUpdate({ _id: id }, { $set: req.body })
      .exec()
      .then(() => {
        res.status(200).json({
          message: "Tag updated",
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
    Tag.find()
      .exec()
      .then((doc) => {
        if (doc.length != 0) res.status(200).json({tag: doc});
        else res.status(404).json({ message: "No Tags" });
      })
      .catch((err) => {
        res.status(500).json({ error: err });
      });
  };
  