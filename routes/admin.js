var express = require('express');
var router = express.Router();
var singleCaseController = require('../controller/singleCaseController.js');
var totalCaseController = require('../controller/totalCaseController.js');

router.get('/get-dataSingle', singleCaseController.findAllSingleCase);

router.post('/insertSingle', singleCaseController.createSingleCase);

router.post('/updateSingle', singleCaseController.updateSingleCase);

router.post('/deleteSingle', singleCaseController.deleteSingleCase);

router.get('/get-dataTotal', totalCaseController.findAllTotalCase);

router.post('/insertTotal', totalCaseController.createTotalCase);

router.post('/updateTotal', totalCaseController.updateTotalCase);

router.post('/deleteTotal', totalCaseController.deleteTotalCase);

module.exports = router;