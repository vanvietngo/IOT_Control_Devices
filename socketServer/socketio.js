// Socket Server
var socket_io = require('socket.io');
var io = socket_io();
var socketio = {};
socketio.io = io;

const datta = require('../models/data-model');
// require function socket
var Lamp = require('./functionSocket/lamp');
var Temperature = require('./functionSocket/Temperature');
var Time = require('./functionSocket/Time');
var Humidity = require('./functionSocket/Humidity');

var arr = [];

//Khi có mệt kết nối được tạo giữa Socket Client và Socket Server
io.on('connection', function (socket) { //'connection' (1) này khác gì với 'connection' (2)
    //khi lắng nghe được lệnh "DHT-Temperature // DHT-Humidity" với một tham số, và chúng ta đặt tên tham số đó là data. Mình thích thì mình đặt thôi
    Temperature.Temperature(socket, io, arr);

    //khi lắng nghe được lệnh "DHT-Temperature // DHT-Humidity" với một tham số, và chúng ta đặt tên tham số đó là data. Mình thích thì mình đặt thôi
    Time.Time(socket, io, arr);

    //khi lắng nghe được lệnh "Humidity-client // DHT-Humidity" với một tham số, và chúng ta đặt tên tham số đó là data. Mình thích thì mình đặt thôi
    Humidity.Humidity(socket, io, arr);

    //lang nghe check switch
    // Lamp.lamp1(socket, io);
});


//---------------------
module.exports = socketio;
