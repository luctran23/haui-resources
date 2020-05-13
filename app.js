var express = require('express');
var subjectRoute = require('./routes/subject.route');
var othersRoute = require('./routes/other.route');

var port = 3000;
var app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('public'));

app.get('/', function(req, res) {
	res.render('homepage');
});

app.use('/others', othersRoute);
app.use('/subjects', subjectRoute);

app.listen(port, function() {
	console.log(`This app listening at http://localhost:${port}`)
});