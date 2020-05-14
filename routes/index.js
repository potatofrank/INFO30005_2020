var express = require('express');
var router = express.Router();
var totalCaseController = require('../controller/totalCaseController.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('H-Home', { title: 'Team Ultra Protection' });
});

router.get('/log',function (req,res,next) {
  res.render('loginPage', { title: 'Admin Login' });
});

router.get('/contact',function (req,res,next) {
  res.render('H-contact');
});

router.get('/Home',function (req,res,next) {
  res.render('H-Home');
});

router.get('/get-dataTotal', totalCaseController.findAllTotalCase);

module.exports = router;
