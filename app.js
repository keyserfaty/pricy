var express = require('express');
var path = require('path');

var app = express();

app.use(express.static('build'));


app.get('/', function (req, res) {
  res.sendFile(path.resolve('build', 'index.html'))
});

app.listen(process.env.PORT || 8080);
console.log('Listening on port: ', process.env.PORT || 8080);
