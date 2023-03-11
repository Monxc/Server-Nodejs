const express = require('express');
const router = express.Router();
const teachersController = require('../app/controllers/teachersControllers');

router.use('/teachers',teachersController.index);

module.exports = router;
