const express = require('express');
const router = express.Router();
const userController = require('../controllers/classesController');

router.get('/', userController.getAllClasses);

module.exports = router;
