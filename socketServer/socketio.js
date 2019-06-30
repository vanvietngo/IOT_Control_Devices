// Socket Server
var socket_io = require('socket.io');
var io = socket_io();
var socketio = {};
socketio.io = io;

// require module
var DataModule = require('../models/data-model');
var SaveDataDeviceModule = require('../models/Device-model/CtlSwitch-model');


// require function socket
var DHT11 = require('./functionSocket/DHT11/DHT11');
var DeviceOnOff = require('./functionSocket/Lamp/OnOff/lamp');
var TimerDevice = require('./functionSocket/Lamp/Timer/TimerLamp');
// Socket save history switch
var SaveDevice1 = require('./functionSocket/Save-data-Device/Device-1');
var SaveDevice2 = require('./functionSocket/Save-data-Device/Device-2');
var SaveDevice3 = require('./functionSocket/Save-data-Device/Device-3');
var SaveDevice4 = require('./functionSocket/Save-data-Device/Device-4');
var SaveDevice5 = require('./functionSocket/Save-data-Device/Device-5');
var SaveDevice6 = require('./functionSocket/Save-data-Device/Device-6');

// var WarningTheif = require('');

//Khi có mệt kết nối được tạo giữa Socket Client và Socket Server
io.on('connection', function (socket) { //'connection' (1) này khác gì với 'connection' (2)
// DHT and save to Mongo Clound
    DHT11.DHT(socket, io, DataModule.Data);


    //lang nghe check switch
    DeviceOnOff.Device1(socket, io);
    DeviceOnOff.Device2(socket, io);
    DeviceOnOff.Device3(socket, io);
    DeviceOnOff.Device4(socket, io);
    DeviceOnOff.Device5(socket, io);
    DeviceOnOff.Device6(socket, io);

    TimerDevice.TimerDevice1(socket, io);
    TimerDevice.TimerDevice2(socket, io);
    TimerDevice.TimerDevice3(socket, io);
    TimerDevice.TimerDevice4(socket, io);
    TimerDevice.TimerDevice5(socket, io);
    TimerDevice.TimerDevice6(socket, io);

    SaveDevice1.SaveDevice1(socket, io, SaveDataDeviceModule.Device1);
});


//---------------------
module.exports = socketio;
