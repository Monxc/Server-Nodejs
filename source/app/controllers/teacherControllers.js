const Teachers = require('../models/Teachers');
const {
    mutipleMongooseToObject,
    mongoosetoObject,
} = require('../../ultil/mongoose');
const { data } = require('jquery');

class teacherController {
    index(req, res, next) {
        Teachers.find({}).then((data) => res.render('home'));
    }
    login(req, res, next) {
        Teachers.findOne({
            username: req.body.username,
            password: req.body.password,
        }).then((data) => {
            if (data) {
                res.redirect('student/');
            } else {
                res.send('đăng nhập thất bại');
            }
        });
    }

    renderregister(req, res, next) {
        res.render('teacher/register');
    }

    valid(req, res, next) {
        Teachers.findOne({
            username: req.body.username,
        }).then((data) => {
            if (data) {
                res.status(403).json({ message: 'Tài khoản đã đăng ký' });
            } else {
                return next();
            }
        });
    }

    register(req, res, next) {
        Teachers.create(req.body).then(res.redirect('/student')).catch(next);
    }
}

module.exports = new teacherController();
