var mongoose = require('mongoose');
var totalCase = mongoose.model('totalCaseInfo');
var AccumulateConfirmedCases;
var CurrentExistingCases;
var AccumulateDeaths;
var AccumulateCuredCases;



var findAllTotalCase = function(req, res, next) {
    totalCase.find({})
        .lean()
        .then(function(doc) {
            res.render('A-totalCaseDisplay', {totalCases: doc});
            console.log(doc);
        });
};

var findlatesttotalCase = function (req,res,next) {
    totalCase.find({})
        .lean()
        .then(function(doc){
            AccumulateConfirmedCases = doc.seats[doc.seats.length-1].Accumulate_Confirmed_Cases;
            CurrentExistingCases = doc.seats[doc.seats.length-1].Current_Existing_Cases;
            AccumulateDeaths = doc.seats[doc.seats.length-1].Accumulate_Deaths;
            AccumulateCuredCases = doc.seats[doc.seats.length-1].Accumulate_Cured_Cases;
            res.render('H-Home',{Accumulate_Confirmed_Cases: AccumulateConfirmedCases ,Current_Existing_Cases:CurrentExistingCases,
                Accumulate_Deaths: AccumulateDeaths,Accumulate_Cured_Cases: AccumulateCuredCases})
            console.log(AccumulateConfirmedCases);
            console.log(CurrentExistingCases);
            console.log(AccumulateDeaths);
            console.log(AccumulateCuredCases);


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