var mongoose = require('mongoose');
var totalCase = mongoose.model('totalCaseInfo');
var latestCaseInfo;

var findAllTotalCase = function(req, res, next) {
    totalCase.find({})
        .lean()
        .then(function(doc) {
            latestCaseInfo = [doc[-1]];
            res.render('H-Home', {totalCases: latestCaseInfo});
            console.log(latestCaseInfo);
        });
};

var createTotalCase = function(req, res, next) {
    var item = {
        Date:req.body.Date,
        Accumulate_Confirmed_Cases:req.body.Accumulate_Confirmed_Cases,
        Current_Existing_Cases:req.body.Current_Existing_Cases,
        Accumulate_Deaths:req.body.Accumulate_Deaths,
        Accumulate_Cured_Cases:req.body.Accumulate_Cured_Cases
    };
    var data = new totalCase(item);
    data.save();
    res.render('H-Home');
};


var deleteTotalCase = function(req, res, next) {
    var id = req.body.id;
    console.log(id);
    totalCase.findOneAndDelete(id).exec();
    res.render('admin', {username: 'Hello admin, Please enter the data'});
};

module.exports.findAllTotalCase = findAllTotalCase;
module.exports.createTotalCase = createTotalCase;
module.exports.deleteTotalCase = deleteTotalCase;