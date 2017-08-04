var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/banking_system');

var Schema = mongoose.Schema;

var UserAuthentication = require('UserAuthentication');
var UserDetail = require('UserDetail');
var UserBankAccount = require('UserBankAccount');

var superUserId = new Schema({
    userAuthentication : { type : UserAuthentication, required : true },
    userBankAccount : { type : UserBankAccount, required : true },
    userDetail : { type : UserDetail, required : true }
});


var SuperUserId = mongoose.model('SuperUserId', superUserId);

module.exports = SuperUserId;
