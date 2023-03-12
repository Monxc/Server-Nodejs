const Students = require('../models/Students');
const { mutipleMongooseToObject } = require('../../ultil/mongoose');

class siteController {
    index(req, res, error) {
        Students.find({})
            .then((students) => {
                res.render('home', {
                    students: mutipleMongooseToObject(students),
                });
            })
            .catch(error);
    }
    contact(req, res) {
        res.render('contact');
    }
    error(req, res) {
        res.render('404');
    }
}

module.exports = new siteController();
