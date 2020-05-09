var express = require('express');
var app = express();

var port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('public'));

var subjects = [
	{id: 1, name: 'XML', description: 'Some example text. Some example text.', link: '#'},
	{id: 2, name: 'JAVA', description: 'Some example text. Some example text.', link: '#'},
	{id: 3, name: 'OOP using C++', description: 'Some example text. Some example text.', link: '#'}
];
app.get('/', function(req, res) {
	res.render('homepage');
});

app.get('/subjects', function(req, res) {
	res.render('subjects/subjectPage', {
		subjects: subjects
	});
});

app.get('/subjects/search', function(req, res) {
	var q = req.query.q;
	var filteredSubjects = subjects.filter(function(subject) {
		return subject.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
	});
	res.render('subjects/subjectPage', {
		subjects: filteredSubjects
	});
});
app.listen(port, function() {
	console.log(`This app listening at http://localhost:${port}`)
});