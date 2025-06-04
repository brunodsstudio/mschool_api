const express = require('express');
const router = express.Router();
const grausController = require('../controllers/grausController');

router.get('/', grausController.getAllGraus);

module.exports = router;
