const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const EntrySchema = new Schema({
    image: {
        type: String,
        required: false
    },
    caption: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Entry = mongoose.model('entry', EntrySchema);