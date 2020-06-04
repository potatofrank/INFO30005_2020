var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var totalCaseSchema = new Schema({
    Date:{type: String, required: true,unique:true},
    Accumulate_Confirmed_Cases: {type: String, required: true},
<<<<<<< HEAD
    Current_Existing_Cases:String,
    Accumulate_Deaths: String,
    Accumulate_Cured_Cases: String,
=======
    Current_Existing_Cases: {type: String, required: true},
    Accumulate_Deaths: {type: String, required: true},
    Accumulate_Cured_Cases: {type: String, required: true},
>>>>>>> 294cba528a6197f937b28f118eef3304c872cffd
}, {collection: 'TotalCaseInfo'});

mongoose.model('totalCaseInfo', totalCaseSchema);