const mongoose = require('mongoose');
const schema = mongoose.Schema({
    ClinicID : String,
    DoctorID: String,
    MRD: String,
    PatientID: String,
    PatientName: String,
    Gender: String,
    Age: Number,
    FundusImageURL: String,
    Result: String,
    Observation: String,
    Prescription: String,
    Verified: {type: String, default: 'No'}

});

module.exports=mongoose.model("Patient",schema);