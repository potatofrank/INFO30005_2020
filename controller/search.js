var mongoose = require('mongoose');
var patients = mongoose.model('singleCaseInfo')

var findReqInfo = async function(req,res){
    var nomatch = null;
    var count = 0;
    if(req.query.search){
        const regex = new RegExp(escapeRegex(req.query.search), 'gi');
        console.log(regex);
        const reqInfo = await patients.find({Living_City: regex});
        count =  reqInfo.length;
        //console.log(reqInfo);
        if(reqInfo.length < 1){
            nomacth = 'No search result, please search other cities.';
        }
        res.render('H-searchresult', {patient: reqInfo, nomatch:nomatch,counts: count})
    }
    else {
        patients.find({},function (err,reqInfo) {
            if(err){
                console.log(err);
            }
            else{
                res.render('H-searchresult',{patient: reqInfo, nomatch: nomatch, counts: count});
                //console.log(reqInfo);
            }

        });
    }
};

function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

module.exports.findReqInfo = findReqInfo;