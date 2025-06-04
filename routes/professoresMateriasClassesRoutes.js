const express = require('express');
const router = express.Router();
const professoresMateriasClassesController = require('../controllers/professoresMateriasClassesController');

router.get('/', professoresMateriasClassesController.allClassMatProfs);

module.exports = router;


