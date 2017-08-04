var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/banking_system');

var Schema = mongoose.Schema;

var transactionSchema = new Schema({
    payerId: {type : String, required: true},
    payeeId: {type : String, required: true},
    amount: {type : String, required: true},
    type: {type : String, required: true},
    description: {type : String, required: true},
    status: {type : String, required: true},
    created: {type : String, required: true}
});

var Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;