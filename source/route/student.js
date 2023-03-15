const express = require('express');
const router = express.Router();
const studentController = require('../app/controllers/studentControllers');

router.get('/create', studentController.create);
router.post('/add', studentController.add);
router.get('/:id/edit', studentController.edit);
router.put('/:id', studentController.update);
router.delete('/:id', studentController.delete);
router.delete('/:id/force', studentController.force);
router.get('/trash', studentController.trash);
router.post('/handler-students', studentController.handlerStudentAction);
router.patch('/:id/restore', studentController.restore);
router.get('/:slug', studentController.show);
module.exports = router;
