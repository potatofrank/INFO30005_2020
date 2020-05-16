var mongoose = require('mongoose');
var singleCase = mongoose.model('singleCaseInfo');


var findAllSingleCase = function(req, res, next) {
    singleCase.find()
        .lean()
        .then(function(doc) {
            res.render('A-singleCaseDisplay', {singleCases: doc});
           //console.log(doc);
        });
};

var createSingleCase = function(req, res, next) {
    var item = {
        Gender:req.body.Gender,
        Age:req.body.Age,
        Symptom:req.body.Symptom,
        Confirmed_Date:req.body.Confirmed_Date,
        Living_City:req.body.Living_City
    };

    var data = new singleCase(item);
    data.save();

    //res.render('A-singleCaseTable');
};


var deleteSingleCase = function(req, res, next) {
    //var id = new ObjectID(req.body.id);
    var id = req.body.ObjectID;
    console.log(id);
    singleCase.findOneAndDelete(id).exec();

    res.render('A-Home');
};

module.exports.findAllSingleCase = findAllSingleCase;
module.exports.createSingleCase = createSingleCase;
module.exports.deleteSingleCase = deleteSingleCase;