var express = require('express');
var path = require('path');
var url = require('url');

var app = express();

app.use('/bower_components', express.static('bower_components'));
app.use('/behaviors', express.static('behaviors'));
app.use('/elements', express.static('elements'));
app.use('/scripts', express.static('scripts'));

app.use(express.static('public'));

module.exports = app;

app.listen(8000, function () {
  console.log('Example app listening on port 8000!');
});
