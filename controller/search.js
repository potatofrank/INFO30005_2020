var mongoose = require('mongoose');
var patients = mongoose.model('singleCaseInfo')


var findReqInfo = async function(req,res){
    var nomatch = null;
    var totalcount = 0;
    var date = "";
    var symptom = "";
    var area = "";
    if(req.query.search){
        const regex = new RegExp(escapeRegex(req.query.search), 'i');
        console.log(regex);
        const reqInfo = await patients.find({Living_City: regex});
        //console.log(reqInfo);
        if(reqInfo.length < 1){
            nomatch = 'No search result, please search other cities.';
        }

        else{
            totalcount =  reqInfo.length;
            date = reqInfo[totalcount-1].Confirmed_Date;
            symptom = reqInfo[totalcount-1].Symptom;
            area = reqInfo[1].Living_City;
            console.log(date);
        }

        res.render('H-searchresult', {patient: reqInfo, nomatch: nomatch,
            counts: totalcount,newDate: date,newSymptom:symptom, searchArea:area})
    }
    else {
        patients.find({},function (err,reqInfo) {
            if(err){
                console.log(err);
            }
            else{

                res.render('H-searchresult',{patient: reqInfo, nomatch: nomatch,
                    counts: totalcount,newDate: date,newSymptom:symptom,searchArea:area})
                //console.log(reqInfo);
            }

        });
    }
};


function escapeRegex(text) {

    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

module.exports.findReqInfo = findReqInfo;