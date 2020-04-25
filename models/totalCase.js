var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var totalCaseSchema = new Schema({
    Date:{type: String, required: true},
    Accumulate_Confirmed_Cases: {type: String, required: true},
    Exist_Confirmed_Cases:String,
    Deaths: String,
    Cured_Cases: String,
}, {collection: 'TotalCaseInfo'});

mongoose.model('totalCaseInfo', totalCaseSchema);