//Viet123456789@
// MODULE FOR uSER
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TheifSchema = new Schema({
Time:String,
User:String,
Status:String
});

const Theif = mongoose.model('Data-Ranning', TheifSchema);

// module.exports = User;
module.exports = Theif;
