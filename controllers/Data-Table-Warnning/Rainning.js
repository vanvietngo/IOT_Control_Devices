const Data_Rain = require('../../models/Warnning-model/Rainning-model');

module.exports={
  index: (req, res, next)=>{
    var arrTime = [];
    var arrStatus = [];
    // var arrUser_turn_off_Warnning = [];

    var element = {};


    Data_Rain.Ranning.find().then((data)=>{
        for (var i in data){
          arrTime.push(data[i].Time);
          arrStatus.push(data[i].Status);
        }

    element = {
      user:req.user,
      Time:arrTime,
      Status:arrStatus
    }
        res.render('pages/dataTable/Warnning/Raining', {Data:element});
      })
  }
}
