"use strict";
const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    }
})

const Status = mongoose.model('status', schema);

module.exports = Status;