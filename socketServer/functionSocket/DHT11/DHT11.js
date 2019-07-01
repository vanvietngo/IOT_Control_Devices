//         dataModel.create({
//             // console.log("da create data")
//             Time: arr[0],
//             Temperature: arr[1],
//             Humidity: arr[2]
//         });
//         arr = [];

module.exports = {
    DHT: (socket, io, dataModel) => {
        var arr = [];
        //khi lắng nghe được lệnh "DHT-Temperature // DHT-Humidity" với một tham số, và chúng ta đặt tên tham số đó là data. Mình thích thì mình đặt thôi
        socket.on('DHT-Temperature', function(data) {
            var now = new Date();
            arr.push(new Date(now + " GMT-0700").toUTCString());
            arr.push(data.Temperature);
            io.sockets.emit("Temperature-client", data);
        });
        // Send news on the socket
        socket.on('DHT-Humidity', function(data) {
            io.sockets.emit("Humidity-client", data);
            arr.push(data.Humidity);
            // add data to mongo by arr
            var query = dataModel.find().limit(1).sort({_id:-1});
            query.exec(function(err, results) {
                if (err) {
                  console.log('err => ' + err);
                }
                else if (results[0].length == 0) {
                  dataModel.create({
                      Time: arr[0],
                      Temperature: arr[1],
                      Humidity: arr[2]
                  });
                  arr = [];
                }
                else {
                    if(results[0].Temperature != arr[1] | results[0].Humidity !=arr[2]){
                      dataModel.create({
                          Time: arr[0],
                          Temperature: arr[1],
                          Humidity: arr[2]
                      });
                      arr = [];
                    }
                }
            });




        });
    }
};
