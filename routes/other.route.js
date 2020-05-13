var express = require('express');
var router = express.Router();
var db = require('../db');

router.get('/', function(req, res) {
	res.render('others/view', {
		others: db.get('others').value()
	})
});

module.exports = router;
