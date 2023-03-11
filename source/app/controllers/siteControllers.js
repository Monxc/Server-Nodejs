class siteController {
    index(req, res) {
        res.render('home');
    }
    contact(req, res) {
        res.render('contact');
    }
}

module.exports = new siteController();
