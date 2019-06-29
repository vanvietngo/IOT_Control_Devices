//Viet123456789@
// modiles for DHT 11

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CtlSwitchSchema = new Schema({
  Time: String,
  DeviceName:String,
  User: String,
  Status: String,
  Timer:String
});

const Device1 = mongoose.model('Data-Device1', CtlSwitchSchema);
const Device2 = mongoose.model('Data-Device2', CtlSwitchSchema);
const Device3 = mongoose.model('Data-Device3', CtlSwitchSchema);
const Device4 = mongoose.model('Data-Device4', CtlSwitchSchema);
const Device5 = mongoose.model('Data-Device5', CtlSwitchSchema);
const Device6 = mongoose.model('Data-Device6', CtlSwitchSchema);


// module.exports = User;
module.exports = {
  Device1:Device1,
  Device2:Device2,
  Device3:Device3,
  Device4:Device4,
  Device5:Device5,
  Device6:Device6
}
