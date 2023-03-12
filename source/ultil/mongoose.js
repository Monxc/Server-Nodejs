module.exports = {
    mutipleMongooseToObject: (mongooses) =>
        mongooses.map((mongoose) => mongoose.toObject()),
    mongoosetoObject: (mongoose) => mongoose.toObject(),
};
