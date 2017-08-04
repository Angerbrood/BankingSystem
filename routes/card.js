var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('viewcards', { title: 'Express' });
});

module.exports = router;