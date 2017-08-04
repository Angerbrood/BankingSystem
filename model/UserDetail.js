var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/banking_system');

var Schema = mongoose.Schema;

var userDetailSchema = new Schema({
    name : { type : String, required : true },
    address : { type : String, required : true },
    city : { type : String, required : true },
    email : { type : String, required : true },
    dateOfBirth: {type : String, required: true}
});


var UserDetail = mongoose.model('UserDetail', userDetailSchema);

module.exports = UserDetail;