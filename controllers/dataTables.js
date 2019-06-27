// const User = require('../models/user-model');
const Data = require('../models/data-model');

module.exports={
  index: (req, res, next)=>{
    var arrTime = [];
    var arrTemp = [];
    var arrHum = [];

    var element = {};


    Data.find().then((data)=>{
        for (var i in data){
          arrTime.push(data[i].Time);
          arrTemp.push(data[i].Temperature);
          arrHum.push(data[i].Humidity);
        }

    element = {
      user:req.user,
      Time:arrTime,
      Temperature:arrTemp,
      Humidity:arrHum
    }
console.log("data is  " + element);
        // res.status(200).send(element);
        res.render('pages/dataTable/tables', {Data:element});


      })
  }
}
