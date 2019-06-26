//Viet123456789@
// modiles for DHT 11

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CtlSưitchSchema = new Schema({
  Time: String,
  DeviceName:String,
  User: String,
  Status: String,
  Timer:String
});

const CtlSwitch = mongoose.model('CtlSưitchSchema', dataSchema);


// module.exports = User;
module.exports = CtlSwitch;
