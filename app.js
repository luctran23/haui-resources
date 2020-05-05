var express = require('express');
var app = express();

var port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(req, res) {
	res.render('homepage');
});

app.listen(port, function() {
	console.log('This app listening at http://localhost:${port}')
});