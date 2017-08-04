var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/banking_system');

var Schema = mongoose.Schema;

var Transaction = require('Transaction');
var CreditCard = require('CreditCard')

var userBankAccountSchema = new Schema({
    accountNumber : { type : String, required : true, unique: true },
    accountType : { type : String, required : true },
    ownerId : { type : String, required : true },
    enabled : { type : String, required : true },
    transactions : { type : [Transaction], required : true },
    creditCards : { type : [CreditCard], required : true }
});


var UserBankAccount = mongoose.model('UserBankAccount', userBankAccountSchema);

module.exports = UserBankAccount;