var express = require('express');
var router = express.Router();
var login = require('../controller/authenticate/login');


/* GET users listing. */
router.get('/', function(req, res, next) {
  var users = [{
    name : 'admin'
  }];

  res.send(users);

});

router.post('/login',function (req,res,next){

  const username =  req.body.username;
  var loginResult = login(username, req.body.password);

  if(loginResult){
    res.render('users',{username: 'Hello admin, Please enter the data'});
  }
  else {
    res.render('index',{error: 'Error: Please enter valid username or password !!!'});
  }
});

module.exports = router;
