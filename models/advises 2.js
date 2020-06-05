var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var adviseSchema = new Schema({
    eMail: {type: String,
        required: true,
        set:(val) =>{
            return bcrypt.hashSync(val,bcrypt.genSaltSync(10),null);
        }},
    content: {type: String, required: true},
}, {collection: 'advises'});

mongoose.model('advise', adviseSchema);