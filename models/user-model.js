//Viet123456789@
// MODULE FOR uSER


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  googleId: String,
  avatar: String
});

// const dataSchema = new Schema({
//   nhietdo: String,
//   doam: String
// });

const User = mongoose.model('user-user', userSchema);
// const Data = mongoose.model('Data', userSchema);


// module.exports = User;
module.exports = User;
