var express = require('express');
var app = express();
var low = require('lowdb');
var FileSync = require('lowdb/adapters/FileSync');

var adapter = new FileSync('db.json')
var db = low(adapter)

db.defaults({ subjects: [] })
  .write()
var port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('public'));


app.get('/', function(req, res) {
	res.render('homepage');
});

app.get('/subjects', function(req, res) {
	res.render('subjects/subjectPage', {
		subjects: db.get('subjects').value() 
	});
});

app.get('/subjects/search', function(req, res) {
	var q = req.query.q;
	var filteredSubjects = db.get('subjects').value().filter(function(subject) {
		return subject.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
	});
	res.render('subjects/subjectPage', {
		subjects: filteredSubjects
	});
});
app.get('/subjects/:id', function(req, res) {
	var id = parseInt(req.params.id);
	var subject = db.get('subjects').find({ id: id }).value();
	res.render('subjects/view',{
		subject: subject
	});
});




app.listen(port, function() {
	console.log(`This app listening at http://localhost:${port}`)
});