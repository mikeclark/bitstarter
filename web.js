var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var page = fs.readFileSync('index.html');
  var buf = new Buffer(16);
  buf.toString(page);
  response.send(buf.toString(page));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
