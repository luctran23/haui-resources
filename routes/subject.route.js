var express = require('express');
var router = express.Router();
var db = require('../db');
var controller = require('../controllers/subjects.controller');

router.get('/', controller.homePage);

router.get('/search', controller.search);

router.get('/:id', controller.viewSbj);

module.exports = router;