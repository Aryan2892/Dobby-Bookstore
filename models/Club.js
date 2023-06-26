const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let ClubSchema = new Schema({
    name : {
        type: String,
        required : true
    },
    author : {
        type: String,
        required : true
    },
    year : {
        type: String,
        required : true
    }
});

module.exports = mongoose.model('club', ClubSchema);