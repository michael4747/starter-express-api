"use strict";
const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    status: {
        type: Boolean,
        required: true
    }
})

const User = mongoose.model('user', schema);

module.exports = User;