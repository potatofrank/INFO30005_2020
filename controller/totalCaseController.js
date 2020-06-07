var mongoose = require('mongoose');
var totalCase = mongoose.model('totalCaseInfo');



var findAllTotalCase = function(req, res, next) {
    totalCase.find({})
        .lean()
        .then(function(doc) {
            res.render('A-totalCaseDisplay', {totalCases: doc});
            console.log([doc[doc.length - 1]]);
        });
};

var findlatesttotalCase = function (req,res,next) {
    totalCase.find({})
        .lean()
        .then(function(doc){
            res.render('H-Home', {overview: [doc[doc.length - 1]]})
            console.log(doc[doc.length - 1]);
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
    //res.render('A-totalCaseTable', {output1: 'Submit Successfully'});
};


var deleteTotalCase = function(req, res, next) {
    var id = req.body.id;
    console.log(id);
    totalCase.findOneAndDelete(id).exec();
    //res.render('A-totalCaseTable', {output2: 'Delete Successfully'});
};

module.exports.findAllTotalCase = findAllTotalCase;
module.exports.createTotalCase = createTotalCase;
module.exports.deleteTotalCase = deleteTotalCase;
module.exports.findlatesttotalCase = findlatesttotalCase;