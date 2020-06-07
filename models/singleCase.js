var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var singleCaseSchema = new Schema({
    Gender: {type: String, required: true, enum:['Male','Female','Other'] },
    Age: {type:String,require:true},
    Symptom:{type:Array, require:true},
    Confirmed_Date: {type:String,require:true},
    Living_City: {type:String, enum : ['City of Melbourne','City of Port Phillip','City of Yarra','City of Banyule','City of Darebin','City of Hume'
        ,'City of Moreland','Shire of Nillumbik','City of Whittlesea','City of Boroondara','City of Knox','City of Manningham','City of Maroondah','City of Whitehorse'
        ,'Shire of Yarra Ranges','City of Bayside','City of Casey','City of Greater Dandenong','City of Frankston','City of Glen Eira','City of Kingston','City of Monash'
        ,'Shire of Mornington Peninsula','City of Stonnington','City of Brimbank','City of Hobsons Bay','City of Maribyrnong','City of Melton','City of Moonee Valley', 'City of Wyndham']}
}, {collection: 'SingleCaseInfo'});

mongoose.model('singleCaseInfo', singleCaseSchema);

//Symptom: {type:String,required: true, enum:['Fever','Dry Cough','Tiredness','Aches and Pains','Running Nose','Diarrhoea','Nasal Congestion','Sore throat']},