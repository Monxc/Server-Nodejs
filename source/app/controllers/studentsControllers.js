class studentsController {
    index(req, res) {
        res.render('students');
    }
    show(req, res) {
        res.send('contact');
    }
}

module.exports = new studentsController();
