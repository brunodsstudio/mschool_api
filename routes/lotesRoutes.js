const express = require('express');
const router = express.Router();
const estudantesController = require('../controllers/estudantesController');


router.get('/300', estudantesController.createLote);

module.exports = router;