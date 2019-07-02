//Viet123456789@
// modiles for DHT 11
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const dataSchemaDHT = new Schema({
  Time: String,
  Temperature: String,
  Humidity: String
});

var Data = mongoose.model('Data-DHT', dataSchemaDHT);

module.exports = {
  Data:Data
};
