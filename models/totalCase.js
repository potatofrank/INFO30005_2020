var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var totalCaseSchema = new Schema({
    Date:{type: String, required: true,unique:true},
    Accumulate_Confirmed_Cases: {type: String, required: true},
    Current_Existing_Cases: {type: String, required: true},
    Accumulate_Deaths: {type: String, required: true},
    Accumulate_Cured_Cases: {type: String, required: true},
}, {collection: 'TotalCaseInfo'});

mongoose.model('totalCaseInfo', totalCaseSchema);