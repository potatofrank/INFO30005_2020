var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var totalCaseSchema = new Schema({
    Date:{type: String, required: true},
    Accumulate_Confirmed_Cases: {type: String, required: true},
    Current_Existing_Cases:String,
    Accumulate_Deaths: String,
    Accumulate_Cured_Cases: String,
}, {collection: 'TotalCaseInfo'});

mongoose.model('totalCaseInfo', totalCaseSchema);