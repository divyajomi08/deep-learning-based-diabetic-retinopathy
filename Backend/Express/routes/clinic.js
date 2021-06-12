var express = require('express');
const clinicContoller = require('../controllers/clinic');
var router = express.Router();


router
  .get('/', clinicContoller.get_all)
  .post('/',clinicContoller.create_clinic);
module.exports = router;
