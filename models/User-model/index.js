//Viet123456789@
// MODULE FOR uSER
// server for PASSPORT GG set up

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  googleId: String,
  avatar: String
});

const User = mongoose.model('user-user', userSchema);

// module.exports = User;
module.exports = User;
