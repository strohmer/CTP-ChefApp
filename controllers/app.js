var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Got it working!');
});


// ROUTES FOR MAIN PAGES --------------

// ROUTE FOR HOMEPAGE
app.get('/home', function(req,res){
	res.sendFile(__dirname + '/controllers/chef/html/index.html');
});

// ROUTE FOR ABOUT US
app.get('/aboutus', function(req,res){
	res.sendFile(__dirname + '/controllers/chef/html/about.html');
});


// ROUTE FOR CREATING ACCOUNT
app.get('/createaccount', function(req,res){
	res.sendFile(__dirname + '/controllers/chef/html/signup.html');
});


// ROUTE FOR PHOTO GALLERY
app.get('/gallery', function(req,res){
	res.sendFile(__dirname + '/controllers/chef/html/gallery.html');
});


app.post('/', function (req, res) {
  res.send('POST REQUEST!');
});
