const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Students = new Schema({
    name: String,
    class: String,
    van: Number,
    toan: Number,
    anh: Number,
    CreateAt: { type: Date, default: Date.now },
    UpdateAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Students', Students);
