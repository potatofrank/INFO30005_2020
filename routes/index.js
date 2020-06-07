var express = require('express');
var router = express.Router();
var singleCaseController = require('../controller/singleCaseController.js');
var advisesController = require('../controller/advisesController.js');
var searchInfo = require('../controller/search.js');
var utilities = require("./utility");

/* GET home page.
router.get('/', function(req, res, next) {
  res.render('H-Home',{ title: 'Team Ultra Protection' });
});*/

router.get('/login', utilities.isLoggedIn, function (req,res,next) {
    res.render('A-Home', {username: 'Hello admin, Please enter the data'});
});

router.get('/contact',function (req,res,next) {
  res.render('H-contact');
});

router.get('/healthTips',function (req,res,next) {
  res.render('H-healthTips');
})

router.get('/charts',function (req,res,next) {
  res.render('H-charts');
})

router.get('/advises',function (req,res,next) {
  res.render('H-advises');
})

router.get('/Home',function (req,res,next) {
  res.render('H-Home');
});

router.get('/search', searchInfo.findReqInfo);


router.get('/', singleCaseController.table);

router.post('/insertAdvise', advisesController.createAdvise);

module.exports = router;
