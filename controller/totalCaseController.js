var mongoose = require('mongoose');
var totalCase = mongoose.model('totalCaseInfo');

var findAllTotalCase = function(req, res, next) {
    totalCase.find()
        .lean()
        .then(function(doc) {
            res.render('admin', {items: doc});
        });
};

var createTotalCase = function(req, res, next) {
    var item = {
        Date:req.body.Date,
        Accumulate_Confirmed_Cases:req.body.Accumulate_Confirmed_Cases,
        Exist_Confirmed_Cases:req.body.Exist_Confirmed_Cases,
        Deaths:req.body.Deaths,
        Cured_Cases:req.body.Cured_Cases
    };
    var data = new totalCase(item);
    data.save();

    res.redirect('/');
};

var updateTotalCase = function(req, res, next) {
    var id = req.body.id;

    totalCase.findById(id, function(err, doc) {
        if (err) {
            console.error('error, no total case found');
        }
        doc.Date = req.body.Date;
        doc.Accumulate_Confirmed_Cases = req.body.Accumulate_Confirmed_Cases;
        doc.Exist_Confirmed_Cases = req.body.Exist_Confirmed_Cases;
        doc.Deaths = req.body.Deaths;
        doc.Cured_Cases = req.body.Cured_Cases;
        doc.save();
    });
    res.redirect('/');
};

var deleteTotalCase = function(req, res, next) {
    var id = req.body.id;
    totalCase.findByIdAndRemove(id).exec();
    res.redirect('/');
};

module.exports.findAllTotalCase = findAllTotalCase;
module.exports.createTotalCase = createTotalCase;
module.exports.updateTotalCase = updateTotalCase;
module.exports.deleteTotalCase = deleteTotalCase;