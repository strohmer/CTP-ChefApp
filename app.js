var express = require('express');
var app = express();


app.use(express.static('./public'));

app.get('/home', function(res,req){
res.sendFile(__dirname + './public/html/index.html');
});


app.get('/', function (req, res) {
  res.send('Hello World!');
});


app.listen(8000, function () {
  console.log('App listening on port 8000!');
});