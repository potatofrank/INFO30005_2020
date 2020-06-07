var express = require('express');
var router = express.Router();
var totalCaseController = require('../controller/totalCaseController.js');
var advisesController = require('../controller/advisesController.js');

/* GET home page.
router.get('/', function(req, res, next) {
  res.render('H-Home',{ title: 'Team Ultra Protection' });
});*/

router.get('/log',function (req,res,next) {
  res.render('loginPage', { title: 'Admin Login' });
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


router.get('/', totalCaseController.findlatesttotalCase);

router.post('/insertAdvise', advisesController.createAdvise);

module.exports = router;
