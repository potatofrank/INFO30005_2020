var express = require('express');
var router = express.Router();
const passport = require('passport');

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
