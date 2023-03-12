const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1/Monxc_education_dev');
        console.log('Connect Successully!!!');
    } catch (error) {
        console.log('Connect fall');
    }
}

module.exports = { connect };
