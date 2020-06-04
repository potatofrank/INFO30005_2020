var express = require('express');
var router = express.Router();
<<<<<<< HEAD
var login = require('../controller/authenticate/login');
=======
const passport = require('passport');
>>>>>>> 294cba528a6197f937b28f118eef3304c872cffd

router.get('/login', function(req,res,next) {
  res.render('loginPage', {error:"Invalid username or password! Try again!"});
});

router.get('/log', function(req,res,next) {
  res.render('loginPage');
});


router.post('/login', passport.authenticate('local-login',{
  successRedirect: '/admin/admin',
  failureRedirect: '/users/login',
  failureFlash: true
}));

module.exports = router;
