var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var routes = require('./index');
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/myapp').connection;

var path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use('/', routes);
app.use(express.static(path.join(__dirname, '../')));

var port = process.env.PORT || 3000;
app.listen(port, function() {
	console.log('Listening on port ', port);
})

var startDbPromise = new Promise(function (resolve, reject) {
    db.on('open', resolve);
    db.on('error', reject);
});

console.log('Opening connection to MongoDB . . .');
startDbPromise.then(function () {
    console.log('MongoDB connection opened!');
});

module.exports = startDbPromise;