module.exports = {

    DHT: (socket, io, dataModel) => {
      var arr = [];

      //khi lắng nghe được lệnh "DHT-Temperature // DHT-Humidity" với một tham số, và chúng ta đặt tên tham số đó là data. Mình thích thì mình đặt thôi
      socket.on('DHT-Temperature', function (data) {
        var now = new Date();

          arr.push(new Date(now + " GMT-0700").toUTCString());
          arr.push(data.Temperature);
          io.sockets.emit("Temperature-client", data);

      });
        // Send news on the socket
        socket.on('DHT-Humidity', function (data) {
            io.sockets.emit("Humidity-client", data);
            arr.push(data.Humidity);

            // add data to mongo by arr
            dataModel.findOne().sort({_id: -1}).exec(function(err, post) {
              if (post == null){
                console.log("post = (null) = " + post);
                console.log("arr = " + arr);
                dataModel.create({
                  // console.log("da create data")
                  Time: arr[0],
                  Temperature: arr[1],
                  Humidity:arr[2]
                });
                arr = [];
              }else {
                console.log("post not = (null) " + post);
                console.log('post.Temperature = ' + post.Temperature)
                console.log("typedef typeof(post).Temperature  =  " + typeof(post.Temperature));

                console.log('post.Humidity = ' + post.Humidity)
                console.log("typedef post.Humidity  =  " + typeof(post.Humidity));
                
console.log("arr[1] = "+ arr[1]);
console.log("typeof arr[1] = "+ typeof(arr[1]));

console.log("arr[2] = "+ arr[2]);

console.log("typeof arr[2] = "+ typeof(arr[2]));

                if( (post.Temperature != arr[1] )|(post.Humidity != arr[2] )){

                  dataModel.create({
                    Time: arr[0],
                    Temperature: arr[1],
                    Humidity:arr[2]
                  });
                  arr = [];
                }


              }

             });

          });
    }
};
