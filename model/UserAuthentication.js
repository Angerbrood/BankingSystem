var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/banking_system');

var Schema = mongoose.Schema;

var userAuthSchema = new Schema({
    username : { type : String, required : true, unique: true },
    password : { type : String, required : true },
    role : { type : String, required : true },
    enabled : { type : String, required : true }
});


var UserAuthentication = mongoose.model('UserAuthentication', userAuthSchema);

module.exports = UserAuthentication;