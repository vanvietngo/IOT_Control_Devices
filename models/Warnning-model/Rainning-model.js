//Viet123456789@
// MODULE FOR uSER
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RanningSchema = new Schema({
Time:String,
Status:String,
User_turn_off_Warnning:String
});

const Ranning = mongoose.model('Data-Ranning', RanningSchema);

module.exports = {
  Ranning:Ranning
};
