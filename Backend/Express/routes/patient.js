const express = require("express");
const router = express.Router();
const patientContoller = require("../controllers/patient");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(file)
    cb(null, "./uploads/");
  },
  filename: (req, file, cb) => {
    console.log(file)
    cb(null, new Date().toISOString() + file.originalname);
  },
});
const upload = multer({storage: storage});

router
  .get('/', patientContoller.get_all)
  .post('/', upload.single('data'),patientContoller.create_patient)
  .patch('/:id', patientContoller.update_patient)
  .put('/:id', patientContoller.update_patient)


module.exports = router;