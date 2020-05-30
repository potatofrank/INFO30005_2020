const passport=require('passport');

const LocalStrategy = require('passport-local').Strategy;

var userModel = require('../models/user.js');



//create the UserModel for userinformaion
var userInfo = [
    {'local.username':'admin','local.password':'admin'},

];

userModel.create(userInfo,
    function(err, userInfo) {
        if (!err) {
            console.log('Start!');
        }
    },
);


module.exports = function(passport) {
    passport.serializeUser(function (user, done) {
        done(null, user._id);
    });

    passport.deserializeUser(function (id, done) {
        userModel.findById(id, function (err, user) {
            done(err, user);
        });
    });


    //strategy to login
    passport.use('local-login', new LocalStrategy({
            usernameField: 'name',
            passwordField: 'password',
            passReqToCallback: true
        },
        function (req, username, password, done) {
            process.nextTick(function () {
                userModel.findOne({'local.name': username}, function (err, user) {
                    if (err)
                        return done(err);
                    if (!user)
                        return done(null, false, req.flash('LoginMessage', 'No username found.'));
                    if (!user.validPassword(password))
                        return done(null, false, req.flash('LoginMessage', 'Oops! Incorrect password.'));
                    else {
                        req.session.username = username;
                        console.log(req.session);
                        return done(null, user, req.flash('LoginMessage', 'Login successful.'));
                    }
                });
            });
        }));
};