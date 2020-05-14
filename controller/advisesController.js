var mongoose = require('mongoose');
var myadvise = mongoose.model('advise');

var findAllAdvises = function(req, res, next) {
    myadvise.find()
        .lean()
        .then(function(doc) {
            res.render('A-advises', {advises: doc});
            //console.log(doc);
        });
};

var createAdvise = function(req, res, next) {
    var item = {
        eMail:req.body.eMail,
        content:req.body.content,
    };
    var data = new myadvise(item);
    data.save();

    res.render('H-advises');
};

module.exports.findAllAdvises = findAllAdvises;
module.exports.createAdvise = createAdvise;