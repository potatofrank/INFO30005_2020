const cors = require('cors');
const passport = require('passport');
const flash = require('connect-flash-plus');
const session = require('express-session');
const jwt = require('jsonwebtoken');
var bcrypt = require("bcrypt");
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('./models/db.js');
require('./config/passport')(passport);

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var adminRouter = require('./routes/admin');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');



app.use(session(({ secret:'iAmFather'})));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.static('public'));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin',adminRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

<<<<<<< HEAD
=======

>>>>>>> 294cba528a6197f937b28f118eef3304c872cffd
//app.listen(process.env.PORT || 3000, ()=> {console.log('App is running');});

module.exports = app;
