var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

//define the schema for oue user model
var userSchema = new Schema({
    local: {
        name: {type: String, unique: true, required: true,},
        password: {type: String,
            required: true,
            set:(val) =>{
                return bcrypt.hashSync(val,bcrypt.genSaltSync(10),null);
            }
            },
    }}, {collection:'users'});



//generating a hash
userSchema.methods.generateHash = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};

// checks if passwords is valid
userSchema.methods.validPassword=function(password){
    return bcrypt.compareSync(password,this.local.password);
};
module.exports = mongoose.model('users', userSchema);