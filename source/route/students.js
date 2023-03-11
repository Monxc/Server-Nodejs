const express = require('express');
const router = express.Router();
const studentsController = require('../app/controllers/studentsControllers');

router.use('/students', studentsController.index);

module.exports = router;
