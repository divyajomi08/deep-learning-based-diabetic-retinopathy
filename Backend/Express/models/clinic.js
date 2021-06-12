const mongoose = require('mongoose');
const schema = mongoose.Schema({
   ClinicID : String,
   ClinicPassword: String

});

module.exports=mongoose.model("Clinic",schema);