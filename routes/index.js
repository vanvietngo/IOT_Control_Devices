var express = require('express');
var router = express.Router();
const passport = require('passport');

const authCheck = (req, res, next)=>{
  if(!req.user){
    // if not login
    res.redirect('/pages/login/login');
  }else{
    // if loggined
    next();
  }
}
/* GET home page. */
//-----------------------------------------------------------------------
router.get('/', function(req, res, next) {
  res.render('pages/login/login', { title: 'Express' });
});
//------------------------------------------------------------------------


// auth login
router.get('/login', function(req, res, next) {
  res.render('pages/login/login');
});
// auth loguot
router.get('/logout', function(req, res, next) {
  // handle with passport
  // res.send('loggin out');
  req.logout();
  res.redirect('pages/login/login')
});
// auth with Google
router.get('/google', passport.authenticate('google', {
  scope: ['profile']
}));


router.get('/profile',authCheck, function(req, res, next) {
  // handle with passport
  // res.send('This is Get profile' + req.user);
  res.render('dataesp', {User:req.user});
});
// callback route for google to redirect to
router.get('/google/redirect', passport.authenticate('google'),(req, res, next) => {
    // res.send(req.user);
    res.redirect('/profile/');
});

module.exports = router;
