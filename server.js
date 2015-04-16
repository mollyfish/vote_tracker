//building a server
//no IIFY!  Node will do it automatically

'use strict';

var express = require('express');
//'require' says go get whatever from package.json
var app = express();

//we are using a middleware (pieces of functionality) for this

app.use(express.static(__dirname + '/public'));
// everything in the public directory will be available from the root of our directory

app.get('/greet', function(req, res) {//translates to the URL localhost/3000/greet
  //req is request and res is response
  res.status(200).send('<h1>Hello Stranger!</h1>');
  //only call ONE .send
});

app.get('greet/:person', function(req, res) {
  res.send('<h1>Hello' + req.params.person + '</h1>');
});

app.get('/*', function(req, res) {
  res.status(404).send('Could not find page');
});

app.listen(process.env.PORT || 3000, function(){ //environmental variable process.env pulls the port from the command line, if it doesn't exist it will go to 3000.  in the command line we can now say "PORT=5000 node server" and the server will pick up on the change.  SWEET

//Heroku makes you go with their port, so this (environmental variables) will be important for that 
  console.log('server is running - you rule!');
});

//listening on port 3000