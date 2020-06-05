function isLoggedIn(req,res,next) {
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/users/log')
}

module.exports = {isLoggedIn}