var mongoose = require('mongoose');
var singleCase = mongoose.model('singleCaseInfo');

var totolNums

var table = function (req,res,next) {
    singleCase.find()
        .lean()
        .then(function(doc) {
            totolNums = doc.length;
            //console.log(totolNums);
            res.render('H-Home', {Accumulate_Confirmed_Cases: totolNums});
        });
}

var findAllSingleCase = function(req, res, next) {
    singleCase.find()
        .lean()
        .then(function(doc) {
            res.render('A-singleCaseDisplay', {singleCases: doc});
           //console.log(doc);
        });

};

var createSingleCase = function(req, res, next) {
    var success = false;
    var output1 = null;
    var item = {
        Gender: req.body.Gender,
        Age: req.body.Age,
        Symptom: req.body.Symptom,
        Confirmed_Date: req.body.Confirmed_Date,
        Living_City: req.body.Living_City
    };
    if(item.Confirmed_Date === "" || item.Symptom === "" || item.Age === "" ) {
        success = false;
        output1 = "Error: Please Fill In All Field.";
    }
    else {
        success = true;
        output1 = "Successfully Submitted!";
    }
    //console.log(success);
    if(success){

        var data = new singleCase(item);
        data.save();
    }
    res.render('A-singleCaseTable', {output: output1});
    //res.status(200).send();
};


var deleteSingleCase = function(req, res, next) {
    //var id = new ObjectID(req.body.id);
    var id = req.body.id;
    console.log(id);
    singleCase.findByIdAndDelete(id).exec();
    res.render('A-Home');
};

module.exports.findAllSingleCase = findAllSingleCase;
module.exports.createSingleCase = createSingleCase;
module.exports.deleteSingleCase = deleteSingleCase;
module.exports.table =  table;