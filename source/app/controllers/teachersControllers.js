class teachersController {
    index(req, res) {
        res.render('teachers');
    }
}

module.exports = new teachersController();
