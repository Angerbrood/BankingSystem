var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/banking_system');

var Schema = mongoose.Schema;

var databaseLogSchema = new Schema({
    activity : { type : String, required: true },
    userId :  { type : String, required: true },
    details: { type: String, required: true },
    date: {type: String, required: true }
});

var DatabaseLog = mongoose.model('DatabaseLog', databaseLogSchema);

module.exports = DatabaseLog;