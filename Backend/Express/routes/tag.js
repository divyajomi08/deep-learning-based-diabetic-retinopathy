var express = require('express');
const tagController = require('../controllers/tag');
var router = express.Router();


router
  .get('/', tagController.get_all)
  .post('/', tagController.create_tag)
  .patch('/:id', tagController.update_tag)
  .put('/:id', tagController.update_tag);

module.exports = router;
