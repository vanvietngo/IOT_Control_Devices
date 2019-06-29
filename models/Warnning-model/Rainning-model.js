//Viet123456789@
// MODULE FOR uSER
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RanningSchema = new Schema({
Time:String,
User:String,
Status:String
});

const Ranning = mongoose.model('Data-Ranning', RanningSchema);

// module.exports = User;
module.exports = Ranning;
