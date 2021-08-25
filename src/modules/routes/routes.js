const express = require('express');

const router = express.Router();

const {
  addImage
} = require('../controllers/image.controllers');

router.post('/addImage', addImage);

module.exports = router;