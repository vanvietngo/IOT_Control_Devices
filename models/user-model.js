//Viet123456789@

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  googleId: String
});

const User = mongoose.model('user-user', userSchema);

module.exports = User;
