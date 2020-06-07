var mongoose = require('mongoose');

const uri = "mongodb+srv://ArtHur:0626@cluster0-nm8oy.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(mongoDB,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

mongoose.Promise = global.Promise;
var db = mongoose.connection;

db.on('error',console.error.bind(console,'connection error'));
db.once('open',function () {
    console.log('connect');
});
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
require('./advise.js');

