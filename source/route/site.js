const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/siteControllers');

router.get('/contact', siteController.contact);
module.exports = router;
