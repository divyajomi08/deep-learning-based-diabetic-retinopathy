const mongoose = require('mongoose');
const schema = mongoose.Schema({
    ClinicID : String,
    Email: String,
    Password: String,
    Name : String,
    DoctorID : String
});

module.exports=mongoose.model("Doctor",schema);