const Students = require('../models/Students');
class siteController {
    contact(req, res) {
        res.render('contact');
    }
    error(req, res) {
        res.render('404');
    }
}

module.exports = new siteController();
