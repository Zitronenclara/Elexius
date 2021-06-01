// IMPORTANT IMPORTS
const mongoose = require('mongoose')
const config = require('./../../config.json')

// IMPORTET MODELS


module.exports.connect = function (){
    mongoose.connect(config.DBurl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, function (err) {
        if (err) throw err;
        console.log('successfully connected to database ' + config.DBurl);
    });
}