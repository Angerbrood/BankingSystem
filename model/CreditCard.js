var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/banking_system');

var Schema = mongoose.Schema;

var creditCardSchema = new Schema({
   cardNumber: {type: String, required: true, unique: true },
   cardExpire: {type: String, required: true },
   moneyOnCard: {type: String, required: true}
});

var CreditCard = mongoose.model('CreditCard', creditCardSchema);

module.exports = CreditCard;
