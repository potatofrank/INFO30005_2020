var express = require('express');
var router = express.Router();
var singleCaseController = require('../controller/singleCaseController.js');
var totalCaseController = require('../controller/totalCaseController.js');
var advisesController = require('../controller/advisesController');


router.get('/admin', function(req, res, next) {
    res.render('admin', {username: 'Hello admin, Please enter the data'});
});

router.get('/get-SingleDate', singleCaseController.findAllSingleCase);

router.post('/insertSingle', singleCaseController.createSingleCase);

router.post('/updateSingle', singleCaseController.updateSingleCase);

router.post('/deleteSingle', singleCaseController.deleteSingleCase);

router.get('/get-dataTotal', totalCaseController.findAllTotalCase);

router.post('/insertTotal', totalCaseController.createTotalCase);

router.post('/deleteTotal', totalCaseController.deleteTotalCase);

router.get('/get-advises',advisesController.findAllAdvises);

module.exports = router;