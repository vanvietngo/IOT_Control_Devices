var express = require('express');
var router = express.Router();
const passport = require('passport');

const authCheck = (req, res, next)=>{
  if(!req.user){
    // if not login
    res.redirect('/login');
  }else{
    // if loggined
    next();
  }
}
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/home', function(req, res, next) {
  res.render('home');
});

// auth login
router.get('/login', function(req, res, next) {
  res.render('login');
});
// auth loguot
router.get('/logout', function(req, res, next) {
  // handle with passport
  // res.send('loggin out');
  req.logout();
  res.redirect('/home')
});
// auth with Google
router.get('/google', passport.authenticate('google', {
  scope: ['profile']
}));


router.get('/profile',authCheck, function(req, res, next) {
  // handle with passport
  // res.send('This is Get profile' + req.user);
  res.render('dataesp');
});
// callback route for google to redirect to
router.get('/google/redirect', passport.authenticate('google'),(req, res, next) => {
    // res.send(req.user);
    res.redirect('/profile/');
});

module.exports = router;
