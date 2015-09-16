'use strict';
var mongoose = require('mongoose');

var Message = new mongoose.Schema ({
    message: {
        type: String
    }
})

mongoose.model('Message', Message);