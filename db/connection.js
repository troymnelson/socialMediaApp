const mongoose = require('mongoose');
is_production = process.env.NODE_ENV;

const uri = is_production ? process.env.mongoURL :  'mongodb://127.0.0.1:27017/socialMediaDB';

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = mongoose.connection;


