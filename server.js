var express = require('express');
var bodyParser = require('body-parser');
var _ = require('lodash');
var session = require('express-session');
var config = require('./config.js')
app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(session({secret:config.server.secret}));
console.log(config.secret);




app.listen(3000, function() {
  console.log('listening on port 3000');
});
