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
// const Data22 = mongoose.model('Data22', dataSchema);


// module.exports = User;
// module.exports = Data;
module.exports = {
  Data:Data
};
