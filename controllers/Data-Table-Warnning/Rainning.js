const Data_Rain = require('../../models/Warnning-model/Rainning-model');

module.exports={
  index: (req, res, next)=>{
    var arrTime = [];
    var arrStatus = [];
    var arrUser_turn_off_Warnning = [];

    var element = {};


    DataDHT.Data.find().then((data)=>{
        for (var i in data){
          arrTime.push(data[i].Time);
          arrTemp.push(data[i].Temperature);
          arrHum.push(data[i].Humidity);
        }


    // Data_Rain.Ranning.find().then((data)=>{
    //     for (var i in data){
    //       arrTime.push(data[i].Time);
    //       arrStatus.push(data[i].Status);
    //       // arrUser_turn_off_Warnning.push(data[i].User_turn_off_Warnning);
    //     }

    element = {
      user:req.user,
      Time:arrTime,
      Status:arrStatus
      // User_turn_off_Warnning:arrUser_turn_off_Warnning
    }
        // res.status(200).send(element);
        res.render('pages/dataTable/Warnning/Raining', {Data:element});


      })
  }
}
