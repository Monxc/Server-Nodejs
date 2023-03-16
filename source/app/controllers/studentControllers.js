const Students = require('../models/Students');
const {
    mongoosetoObject,
    mutipleMongooseToObject,
} = require('../../ultil/mongoose');

class studentController {
    index(req, res, error) {
        Promise.all([Students.find({}), Students.countDeleted()])
            .then(([students, count]) => {
                res.render('student', {
                    count,
                    students: mutipleMongooseToObject(students),
                });
            })
            .catch(error);
    }
    show(req, res, next) {
        Students.findOne({ slug: req.params.slug })
            .then((student) =>
                res.render('student/show', {
                    student: mongoosetoObject(student),
                }),
            )
            .catch(next);
    }
    create(req, res, next) {
        res.render('student/create');
    }
    add(req, res, next) {
        let formData = req.body;
        Students.create(formData)
            .then(() => res.redirect('back'))
            .catch(next);
    }
    edit(req, res, next) {
        Students.findById(req.params.id).then((student) =>
            res.render('student/edit', { student: mongoosetoObject(student) }),
        );
    }
    update(req, res, next) {
        let formData = req.body;
        Students.updateOne({ _id: req.params.id }, formData)
            .then(() => res.redirect('back'))
            .catch(next);
    }
    delete(req, res, next) {
        Students.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
    trash(req, res, next) {
        Students.findDeleted()
            .then((students) =>
                res.render('student/trash', {
                    students: mutipleMongooseToObject(students),
                }),
            )
            .catch(next);
    }
    restore(req, res, next) {
        Students.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
    force(req, res, next) {
        Students.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
    handlerStudentAction(req, res, next) {
        switch (req.body.action) {
            case 'delete':
                Students.delete({ _id: { $in: req.body.studentids } })
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;
            case 'restore':
                Students.restore({ _id: { $in: req.body.studentids } })
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;
            case 'deleteForce':
                Students.deleteMany({ _id: { $in: req.body.studentids } })
                    .then(() => res.redirect('back'))
                    .catch(next);
                break;
        }
    }
}

module.exports = new studentController();
