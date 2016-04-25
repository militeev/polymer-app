var express = require('express');
var path = require('path');
var httpProxy = require('http-proxy');
var url = require('url');
var util = require('util');

var app = express();

var apiProxy = httpProxy.createProxyServer();

apiProxy.on('proxyRes', function (proxyRes, req, res) {
  console.log('RAW Response from the target', JSON.stringify(proxyRes.headers, true, 2));
  console.log(util.inspect(proxyRes));
});

//app.all(['/star-custom/saml/*', '/star-custom/api/*', '/star-custom/temp-file/*'], function(req, res) {
  //console.log('%s %s %s', req.method, req.url, req.path);
  //req.url = req.url.replace('/app/', '/');
  //apiProxy.web(req, res, { target: 'http://localhost:8080' });
//  apiProxy.web(req, res, { target: 'http://qa.rli.pacificmetrics.com:18080' });
//});


app.use('/bower_components', express.static('bower_components'));
app.use('/behaviors', express.static('behaviors'));
app.use('/elements', express.static('elements'));
app.use('/scripts', express.static('scripts'));

app.use(express.static('public'));

module.exports = app;

app.listen(8000, function () {
  console.log('Example app listening on port 8000!');
});