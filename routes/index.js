var express = require('express');
var router = express.Router();
const passport = require('passport');

const dataController = require('../controllers/profile');
const dataTables_DHT = require('../controllers/dataTables-DHT');
const dataTables_Rain = require('../controllers/Data-Table-Warnning/Rainning');
const dataTables_Thief = require('../controllers/Data-Table-Warnning/Thief');
// const dataTables_Device_1 = require('../controllers/dataTables-DHT');
// const dataTables_Device_2 = require('../controllers/dataTables-DHT');


const authCheck = (req, res, next)=>{
  if(!req.user){
    // if not login
    res.redirect('/login');
  }else{
    // if loggined
    next();
  }
}


// auth with Google
router.get('/google', passport.authenticate('google', {
  scope: ['profile']
}));

// callback route for google to redirect to
router.get('/google/redirect', passport.authenticate('google'),(req, res, next) => {
    // res.send(req.user);
    res.redirect('/profile/');
});

router.get('/profile',authCheck, dataController.index);

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

router.get('/dataTables',authCheck,dataTables_DHT.index);

router.get('/dataTables-Warnning-Rain',authCheck,dataTables_Rain.index);

router.get('/dataTables-Warnning-Thief',authCheck,dataTables_Thief.index);

// auth loguot
router.get('/logout', function(req, res, next) {
  // handle with passport
  req.logout();
  res.redirect('/login')
});
module.exports = router;
