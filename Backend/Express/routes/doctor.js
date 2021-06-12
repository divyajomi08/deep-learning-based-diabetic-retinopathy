var express = require('express');
const doctorContoller = require('../controllers/doctor');
var router = express.Router();


router
  .get('/', doctorContoller.get_all)
  .post('/', doctorContoller.create_doctor)
  .patch('/:id', doctorContoller.update_doctor)
  .put('/:id', doctorContoller.update_doctor);

module.exports = router;
