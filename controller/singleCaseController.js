var mongoose = require('mongoose');
var singleCase = mongoose.model('singleCaseInfo');
//var ObjectID = require('mongodb').ObjectID;

var findAllSingleCase = function(req, res, next) {
    singleCase.find()
        .lean()
        .then(function(doc) {
            res.render('admin', {items: doc});
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

    res.render('admin', {username: 'Hello admin, Please enter the data'});
};

var updateSingleCase = function(req, res, next) {
    var id = req.body.id;

    singleCase.findById(id, function(err, doc) {
        if (err) {
            console.error('error, no single case found');
        }
        doc.Gender = req.body.Gender;
        doc.Age = req.body.Age;
        doc.Symptom = req.body.Symptom;
        doc.Confirmed_Date = req.body.Confirmed_Date;
        doc.Living_City = req.body.Living_City;
        doc.save();
    });
    res.redirect('/');
};

var deleteSingleCase = function(req, res, next) {
    //var id = new ObjectID(req.body.id);
    var id = req.body.ObjectID;
    console.log(id);
    singleCase.findOneAndDelete(id).exec();

    res.render('admin', {username: 'Hello admin, Please enter the data'});
};




module.exports.findAllSingleCase = findAllSingleCase;
module.exports.createSingleCase = createSingleCase;
module.exports.updateSingleCase = updateSingleCase;
module.exports.deleteSingleCase = deleteSingleCase;