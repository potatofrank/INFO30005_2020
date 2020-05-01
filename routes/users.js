var express = require('express');
var router = express.Router();
var login = require('../controller/authenticate/login');

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


module.exports = router;
