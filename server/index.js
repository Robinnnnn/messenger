var router = require('express').Router();
var path = require('path');
var mongoose = require('mongoose');
require('./db/message.js');
var Message = mongoose.model('Message');

router.get('/', function(req, res, next) {
    var index = path.join(__dirname, '../index.html')
    res.sendFile(index);
});

router.post('/message', function(req, res, next) {
    console.log('this is the message:', req.body.text)

    var newMessage = Message(req.body);

    console.log('saving new message', newMessage)

    newMessage.save()
           .then(function(savedMessage){
                res.status(200).send(savedMessage); 
           })
           .catch(function(error) {
                console.log('Error!', error);
                res.status(400).send(error);
           })
})

module.exports = router;