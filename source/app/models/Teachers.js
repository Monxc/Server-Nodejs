const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

mongoose.plugin(slug);
mongoose.plugin(mongooseDelete);
mongoose.plugin(mongooseDelete, { deletedAt: true, overrideMethods: true });

const Teachers = new Schema(
    {
        username: String,
        password: String,
        name: { type: String, name: 'username' },
    },
    {
        timestamps: true,
        collection: 'AccountTeachers',
    },
);

module.exports = mongoose.model('AccountTeacher', Teachers);
