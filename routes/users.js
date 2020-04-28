var express = require('express');
var router = express.Router();
var login = require('../controller/authenticate/login');
var singleCaseController = require('../controller/singleCaseController.js');
var totalCaseController = require('../controller/totalCaseController.js');


/* GET users listing. */
router.get('/', function(req, res, next) {
  var users = [{
    name : 'admin'
  }];

  res.send(users);
  res.render('admin',{ title: 'Database System' });

});



router.post('/login',function (req,res,next){

  const username =  req.body.username;
  var loginResult = login(username, req.body.password);

  if(loginResult){
    res.render('admin',{username: 'Hello admin, Please enter the data'});
  }
  else {
    res.render('loginPage',{error: 'Error: Please enter valid username or password !!!'});
  }
});

router.get('/get-dataSingle', singleCaseController.findAllSingleCase);

router.post('/insertSingle', singleCaseController.createSingleCase);

router.post('/updateSingle', singleCaseController.updateSingleCase);

router.post('/deleteSingle', singleCaseController.deleteSingleCase);

router.get('/get-dataTotal', totalCaseController.findAllTotalCase);

router.post('/insertTotal', totalCaseController.createTotalCase);

router.post('/updateTotal', totalCaseController.updateTotalCase);

router.post('/deleteTotal', totalCaseController.deleteTotalCase);



module.exports = router;
