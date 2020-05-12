var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Team Ultra Protection' });
});

router.get('/log',function (req,res,next) {
  res.render('loginPage', { title: 'Admin Login' });
});

module.exports = router;
