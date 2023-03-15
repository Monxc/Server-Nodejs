const Students = require('../models/Students');
const {
    mongoosetoObject,
    mutipleMongooseToObject,
} = require('../../ultil/mongoose');

class studentController {
    show(req, res, error) {
        Students.findOne({ slug: req.params.slug })
            .then((student) =>
                res.render('student/show', {
                    student: mongoosetoObject(student),
                }),
            )
            .catch(error);
    }
    create(req, res, error) {
        res.render('student/create');
    }
    add(req, res, error) {
        let formData = req.body;
        Students.create(formData)
            .then(() => res.redirect('/'))
            .catch(error);
    }
    edit(req, res, error) {
        Students.findById(req.params.id).then((student) =>
            res.render('student/edit', { student: mongoosetoObject(student) }),
        );
    }
    update(req, res, error) {
        let formData = req.body;
        Students.updateOne({ _id: req.params.id }, formData)
            .then(() => res.redirect('/'))
            .catch(error);
    }
    delete(req, res, error) {
        Students.delete({ _id: req.params.id })
            .then(() => res.redirect('/'))
            .catch(error);
    }
    trash(req, res, error) {
        Students.findDeleted()
            .then((students) =>
                res.render('student/trash', {
                    students: mutipleMongooseToObject(students),
                }),
            )
            .catch(error);
    }
    restore(req, res, error) {
        Students.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(error);
    }
    force(req, res, error) {
        Students.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('/'))
            .catch(error);
    }
    handlerStudentAction(req, res, error) {
        switch (req.body.action) {
            case 'delete':
                Students.delete({ _id: { $in: req.body.studentids } })
                    .then(() => res.redirect('/'))
                    .catch(error);
                break;
            case 'restore':
                Students.restore({ _id: { $in: req.body.studentids } })
                    .then(() => res.redirect('back'))
                    .catch(error);
                break;
            case 'deleteForce':
                Students.deleteMany({ _id: { $in: req.body.studentids } })
                    .then(() => res.redirect('back'))
                    .catch(error);
                break;
        }
    }
}

module.exports = new studentController();
