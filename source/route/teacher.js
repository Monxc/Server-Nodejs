const express = require('express');
const router = express.Router();
const teacherController = require('../app/controllers/teacherControllers');

router.post('/login', teacherController.login);
router.post('/register', teacherController.valid, teacherController.register);
router.get('/register', teacherController.renderregister);
router.get('/', teacherController.index);

module.exports = router;
