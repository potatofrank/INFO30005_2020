var express = require('express');
var router = express.Router();
const passport = require('passport');

router.get('/login', function(req,res,next) {
  res.render('loginPage', {error:"1"});
});


router.post('/login', passport.authenticate('local-login',{
  successRedirect: '/admin/admin',
  failureRedirect: '/login',
  failureFlash: true
}));

module.exports = router;
