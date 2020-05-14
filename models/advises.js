var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var adviseSchema = new Schema({
    eMail: {type: String, required: true},
    content: {type: String, required: true},
}, {collection: 'advises'});

mongoose.model('advise', adviseSchema);