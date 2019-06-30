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
            var tempSS = dataModel.findOne().sort({
                _id: -1
            })
            console.log('tempSS.Temperature = ' + tempSS.Temperature);
            console.log('tempSS' + tempSS);
            console.log('dataModel.findOne().sort({
                _id: -1
            }) == ' + dataModel.findOne().sort({
                _id: -1
            }));


            if(tempSS == null){
              console.log('tempSS = null')
              dataModel.create({
                  // console.log("da create data")
                  Time: arr[0],
                  Temperature: arr[1],
                  Humidity: arr[2]
              });
              arr = [];
            }else{
              console.log('tempSS != null');
              console.log('tempSS.Temperature = ' + tempSS.Temperature);

              if(tempSS.Temperature != arr[1] | tempSS.Humidity !=arr[2]){
                dataModel.create({
                    // console.log("da create data")
                    Time: arr[0],
                    Temperature: arr[1],
                    Humidity: arr[2]
                });
                arr = [];
              }
            }

        });
    }
};
