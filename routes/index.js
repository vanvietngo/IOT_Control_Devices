var express = require('express');
var router = express.Router();
const passport = require('passport');
const dataController = require('../controllers/profile');

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
  req.logout();
  res.redirect('pages/login/login')
});
// auth with Google
router.get('/google', passport.authenticate('google', {
  scope: ['profile']
}));

router.get('/profile',authCheck, dataController.index);

// router.get('/profile',authCheck, function(req, res, next) {
//   // handle with passport
//   // res.send('This is Get profile' + req.user);
//   // res.render('dataesp', {User:req.user});
//   res.render('pages/showData/index', {User:req.user});
//
// });


// callback route for google to redirect to
router.get('/google/redirect', passport.authenticate('google'),(req, res, next) => {
    // res.send(req.user);
    res.redirect('/profile/');
});

module.exports = router;
