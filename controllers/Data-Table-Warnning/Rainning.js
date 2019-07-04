const Data_Rain = require('../../models/Warnning-model/Rainning-model');
// const DataDHT = require('../../models/DHT-model/index');

module.exports={
  index: (req, res, next)=>{
    var arrTime2 = [];
    var arrStatus2 = [];
    // var arrUser_turn_off_Warnning = [];

    var element = {};


    // DataDHT.Data.find().then((data)=>{
    //     for (var i in data){
    //       arrTime.push(data[i].Time);
    //       arrTemp.push(data[i].Temperature);
    //       arrHum.push(data[i].Humidity);
    //     }


    Data_Rain.Ranning.find().then((data)=>{
        for (var i in data){
          arrTime2.push(data[i].Time);
          arrStatus2.push(data[i].Status);
          // arrUser_turn_off_Warnning.push(data[i].User_turn_off_Warnning);
        }

    element2 = {
      user:req.user,
      Time:arrTime2,
      Status:arrStatus2
      // User_turn_off_Warnning:arrUser_turn_off_Warnning
    }
        // res.status(200).send(element);
        res.render('pages/dataTable/Warnning/Raining', {Data:element2});


      })
  }
}
