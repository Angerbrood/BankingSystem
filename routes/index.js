var express = require('express');
var router = express.Router();
var app = express();
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});



app.post('/login',
    passport.authenticate('local', { successRedirect: '/account',
        failureRedirect: '/',
        failureFlash: 'Invalid usernam  e or password' })
);
module.exports = router;