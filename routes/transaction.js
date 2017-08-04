var express = require('express');
var router = express.Router();
var CreditCard = require('../model/CreditCard');

router.get('/', function(req, res, next) {
    res.render('transaction', { title: 'Express' });
});

router.get('/viewtransactions', function (req, res) {
   res.render('viewtransactions');
});
router.get('/newtransaction', function (req, res) {
   res.render('newtransaction');
});

module.exports = router;