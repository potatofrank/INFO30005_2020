var express = require('express');
var router = express.Router();
var singleCaseController = require('../controller/singleCaseController.js');
var totalCaseController = require('../controller/totalCaseController.js');
<<<<<<< HEAD
var advisesController = require('../controller/advisesController');
=======
var advisesController = require('../controller/advisesController.js');
const flash = require('connect-flash-plus');

>>>>>>> 294cba528a6197f937b28f118eef3304c872cffd


router.get('/admin', function(req, res, next) {
    res.render('A-Home', {username: 'Hello admin, Please enter the data'});
});

router.get('/logout',function (req,res) {
    req.logout();
    req.flash('');
    res.redirect('/');
})

router.get('/get-SingleDate', singleCaseController.findAllSingleCase);

router.post('/insertSingle', singleCaseController.createSingleCase);


router.post('/deleteSingle', singleCaseController.deleteSingleCase);

router.get('/get-dataTotal', totalCaseController.findAllTotalCase);

router.post('/insertTotal', totalCaseController.createTotalCase);

router.post('/deleteTotal', totalCaseController.deleteTotalCase);

router.get('/get-advises', advisesController.findAllAdvises);


router.get('/singleTable', function (req,res,next) {
    res.render('A-singleCaseTable');
});

router.get('/totalTable', function (req,res,next) {
    res.render('A-totalCaseTable');
});

router.get('/loadData', function (req,res,next) {
    res.render('A-Home');
});

module.exports = router;