var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/client/views/index.html');
});

app.use('/bower', express.static(__dirname + '/bower_components'));
app.use('/js', express.static(__dirname + '/client/js'));
app.use('/css', express.static(__dirname + '/client/css'));
app.use('/views', express.static(__dirname + '/client/views'));
app.use('/img', express.static(__dirname + '/client/img'));

app.listen(3000, function() {
	console.log('App running on port 3000');
});
