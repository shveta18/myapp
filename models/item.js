const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema

const ItemSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    emotion: {
        type: String,
        required: true
    },
    physical: {
        type: String,
        required: true
    }

});

module.exports = Item = mongoose.model('item', ItemSchema);