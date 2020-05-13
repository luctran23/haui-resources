var db = require('../db');

module.exports.homePage = function(req, res) {
	res.render('subjects/subjectPage', {
		subjects: db.get('subjects').value() 
	});
};

module.exports.search = function(req, res) {
	var q = req.query.q;
	var filteredSubjects = db.get('subjects').value().filter(function(subject) {
		return subject.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
	});
	res.render('subjects/subjectPage', {
		subjects: filteredSubjects
	});
};
module.exports.viewSbj = function(req, res) {
	var id = parseInt(req.params.id);
	var subject = db.get('subjects').find({ id: id }).value();
	res.render('subjects/view',{
		subject: subject
	});
};
