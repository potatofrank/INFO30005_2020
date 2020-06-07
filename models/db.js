var mongoose = require('mongoose');

const uri = "mongodb+srv://ArtHur:0626@cluster0-nm8oy.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(uri,
    function(err){
        if(!err){
            console.log('Connected to mongo.');
        }else{
            console.log('Failed to connect to mongo!', err);
        }
    });

require('./singleCase.js');
require('./totalCase.js');
require('./advises.js');

