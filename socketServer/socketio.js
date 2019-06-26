// Socket Server
var socket_io = require('socket.io');
var io = socket_io();
var socketio = {};
socketio.io = io;

const Data = require('../models/data-model');
// require function socket
var Temperature = require('./functionSocket/DHT11/Temperature');
var Humidity = require('./functionSocket/DHT11/Humidity');
var LampOnOff = require('./functionSocket/Lamp/OnOff/lamp');
var TimerLamp = require('./functionSocket/Lamp/Timer/TimerLamp')
var arr = [];

//Khi có mệt kết nối được tạo giữa Socket Client và Socket Server
io.on('connection', function (socket) { //'connection' (1) này khác gì với 'connection' (2)
// DHT and save to Mongo Clound
    // Temperature.Temperature(socket, io, arr);
    Humidity.Humidity(socket, io, arr, Data);


    //lang nghe check switch
    LampOnOff.lamp1(socket, io);
    LampOnOff.lamp2(socket, io);
    TimerLamp.TimerLamp1(socket, io);
    TimerLamp.TimerLamp2(socket, io);

});


//---------------------
module.exports = socketio;
