"use strict";
const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    status: {
        type: Boolean,
        required: true
    }
})

const Status = mongoose.model('status', schema);

module.exports = Status;