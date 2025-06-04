const express = require('express');
const router = express.Router();
const materiasController = require('../controllers/materiasController');

router.get('/', materiasController.getAllMaterias);

module.exports = router;
