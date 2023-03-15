const siteRouter = require('./site');
const studentRouter = require('./student');
function route(app) {
    app.use(siteRouter);
    app.use('/student', studentRouter);
}
module.exports = route;
