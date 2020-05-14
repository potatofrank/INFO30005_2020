var express = require('express');
var router = express.Router();
var singleCaseController = require('../controller/singleCaseController.js');
var totalCaseController = require('../controller/totalCaseController.js');


router.get('/admin', function(req, res, next) {
    res.render('admin', {username: 'Hello admin, Please enter the data'});
});

router.get('/get-SingleDate', singleCaseController.findAllSingleCase);

router.post('/insertSingle', singleCaseController.createSingleCase);

router.post('/updateSingle', singleCaseController.updateSingleCase);

router.post('/deleteSingle', singleCaseController.deleteSingleCase);


router.post('/insertTotal', totalCaseController.createTotalCase);

router.post('/deleteTotal', totalCaseController.deleteTotalCase);

module.exports = router;