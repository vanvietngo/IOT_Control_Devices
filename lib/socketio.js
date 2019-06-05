var socket_io = require('socket.io');
var io       = socket_io();
var socketio = {};
socketio.io  = io;


//Khi có mệt kết nối được tạo giữa Socket Client và Socket Server
io.on('connection', function(socket) {	//'connection' (1) này khác gì với 'connection' (2)
	//hàm console.log giống như hàm Serial.println trên Arduino
    console.log("Connected"); //In ra màn hình console là đã có một Socket Client kết nối thành công.

	//Khi lắng nghe được lệnh "connection" với một tham số, và chúng ta đặt tên tham số là message. Mình thích gì thì mình đặt thôi.
	//'connection' (2)
    socket.on('connection', function(message) {
        console.log(message);
    });

	//khi lắng nghe được lệnh "DHT-Temperature // DHT-Humidity" với một tham số, và chúng ta đặt tên tham số đó là data. Mình thích thì mình đặt thôi
    socket.on('Time', function (data) {
        console.log(data);
        io.sockets.emit("time-client", data);
        // user.create([
        //   {Time: data.Time}
        // ])
  });

    socket.on('DHT-Humidity', function(data) {
        console.log(data);
        io.sockets.emit("Humidity-client", data);
        // user.create([
        //   {'Temperature':data.Humidity}
        // ])
    });

  	socket.on('DHT-Temperature', function (data) {
        console.log(data);
        console.log("------------- *** -------------");
        io.sockets.emit("Temperature-client", data);
});
});


//---------------------
module.exports =  socketio;