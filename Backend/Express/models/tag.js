const mongoose = require('mongoose');
const schema = mongoose.Schema({
    ClinicID : String,
    DoctorID: String,
    PatientID: String,
    FundusImageURL: String,
    Result: String,

});

module.exports=mongoose.model("Tag",schema);