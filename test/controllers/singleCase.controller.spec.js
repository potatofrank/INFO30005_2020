var mongoose = require('mongoose');
var mongoDB = 'mongodb+srv://ArtHur:0626@cluster0-nm8oy.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoDB,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

mongoose.Promise = global.Promise;
var db = mongoose.connection;

db.on('error',console.error.bind(console,'connection error'));
db.once('open',function () {
    console.log('connect');
});

var sinon = require('sinon');
var expect = require('chai').expect;
var assert = require('chai').assert;
var should = require('chai').should();

require('../../models/singleCase');
var singleCases = mongoose.model('singleCaseInfo')
var searchCases = require('../../controller/search.js');

describe('searchCases', function () {
    // Below, we are going to test HTTP functions, so we need to create fake request and respond object!

    const mockResponse = () => {
        const res = {}
        res.render = (A, B) => {res.json = A; res.no = B};
        return res;
    }

    // this is just example how you can design the fake request, you can also add header property if your website needs one!
    // I'm not even going to use any of these stuff inside request
    const mockRequest = (session,query, body) => ({
        session,
        query,
        body,
    });

    // I just want to remind that using chai is easier to read
    describe('findReqInfo', function() {
        it("singleCase should have Gender, Age, Symptom, Confirmed_Date and Living_City", function(){
            const req = mockRequest({},{search: 'melbourne'}, {});
            const res = mockResponse();

            searchCases.findReqInfo(req,res);
            console.log(res.no);
            res.no.patient.forEach(element => {
                console.log(element);
                expect(element).to.have.property('Living_City');//check one with chai

            });
        })

    });
});
