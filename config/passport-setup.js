// console.cloud.google.com

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./keys');
const User = require('../models/user-model');


passport.serializeUser((user, done)=>{
  done(null, user.id);
});

passport.deserializeUser((id, done)=>{
  User.findById(id).then((user)=>{
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy({
    // options for the google start
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret,
    callbackURL: '/google/redirect',
    // realm : 'http://192.168.1.102:3000'
  }, (accessToken, refreshToken,profile,done)=>{
    // passport callback function
    console.log('passport callback function');
    console.log(profile);
    // check user allready in db
    User.findOne({googleId:profile.id}).then((currentUser)=>{
      if(currentUser){
        // user is exist
        console.log('user is exist : '+ currentUser);
        done(null, currentUser); // if not have it -> treo server
      }else{
        // if not, create user
        new User({
          username: profile.displayName,
          googleId: profile.id
        }).save().then((newUser)=>{
          console.log('new User create: ', newUser);
          done(null, newUser);
        });
      }
    });

  })
);
