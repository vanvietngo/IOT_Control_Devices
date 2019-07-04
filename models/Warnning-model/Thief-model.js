//Viet123456789@
// MODULE FOR uSER
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TheifSchema = new Schema({
  Time:String,
  Status:String,
  User_turn_off_Warnning:String
});

const Theif = mongoose.model('Data-Theif', TheifSchema);

// module.exports = User;
module.exports = {
  Theif:Theif
};
