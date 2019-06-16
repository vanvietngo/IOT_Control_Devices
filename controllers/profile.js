// const User = require('../models/user-model');
const Data = require('../models/data-model');

module.exports={
  index: (req, res, next)=>{
    console.log("this is handle.js");
    var arrTime = [];
    var arrTemp = [];
    var arrHum = [];

    var element = {};


    var i;
    Data.find().then((data)=>{
        for (i in data){
          arrTime.push(data[i].time);
          arrTemp.push(data[i].Temperature);
          arrHum.push(data[i].Humidity);
        }

    element = {
      user:req.user,
      time:arrTime,
      Temperature:arrTemp,
      Humidity:arrHum
    }

        // res.status(200).send(element);
        res.render('pages/showData/index', {Data:element});
        console.log("element => " + element);
        console.log("length element => " + element.Temperature.length);

        // console.log("element.temp => " + element.Temperature);


      })
  }
}
