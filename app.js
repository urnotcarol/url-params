var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hello, hello, hello');
});

//eg. http://localhost:port/Joe/15  -->{"name": "Joe", "age" : "15"}
app.get('/:name/:age', function(req, res) {
  res.send(req.params);
});

//eg. http://localhost:port/00009.html  -->00009
app.get('/:str', function(req, res) {
  var theId = req.params.str.split('.')[0];
  res.send(theId);
});

//eg. http://localhost:port/info?name=Joe&age=15 -->{"name": "Joe", "age" : "15"}
app.get('/info', function(req, res) {
  var theGuy = {};
  theGuy[name] = req.query.name;
  theGuy[age] = req.query.age;
  res.send(theGuy);
});

var server = app.listen(3000, function() {
  console.log('url');
});
