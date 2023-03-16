const siteRouter = require('./site');
const studentRouter = require('./student');
const teacherRouter = require('./teacher');
function route(app) {
    app.use(siteRouter);
    app.use('/student', studentRouter);
    app.use('/', teacherRouter);
}
module.exports = route;
