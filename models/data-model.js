//Viet123456789@
// modiles for DHT 11
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const dataSchema = new Schema({
  Time: String,
  Temperature: String,
  Humidity: String
});

const Data = mongoose.model('Data', dataSchema);


// module.exports = User;
module.exports = Data;
