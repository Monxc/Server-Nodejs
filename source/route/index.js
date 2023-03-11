const studentsRouter = require('./students');
const teachersRouter = require('./teachers');
const siteRouter = require('./site');
function route(app) {
    app.use(studentsRouter);
    app.use(teachersRouter);
    app.use(siteRouter);
}
module.exports = route;
