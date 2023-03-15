const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

mongoose.plugin(slug);
mongoose.plugin(mongooseDelete);
mongoose.plugin(mongooseDelete, { deletedAt: true, overrideMethods: true });

const Students = new Schema(
    {
        name: String,
        class: String,
        slug: String,
        toan: Number,
        van: Number,
        anh: Number,
        slug: { type: String, slug: 'name' },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Students', Students);
