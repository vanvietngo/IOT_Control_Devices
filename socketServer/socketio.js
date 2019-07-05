// Socket Server
var socket_io = require('socket.io');
var io = socket_io();
var socketio = {};
socketio.io = io;

// require module
var Data_DHT_Module = require('../models/DHT-model/index');
var SaveDataDeviceModule = require('../models/Device-model/CtlSwitch-model');
var SaveDataWarning_Rainning_Module = require('../models/Warnning-model/Rainning-model');
var SaveDataWarning_Thief_Module = require('../models/Warnning-model/Thief-model');


// require function socket
var DHT11 = require('./functionSocket/DHT11/DHT11');
var DeviceOnOff = require('./functionSocket/Lamp/OnOff/lamp');
var TimerDevice = require('./functionSocket/Lamp/Timer/TimerLamp');
var WarningTheif = require('./functionSocket/Show-Warning/Thief');
var WarningRainning = require('./functionSocket/Show-Warning/Rainning');

// Socket save history switch
var SaveDevice1 = require('./functionSocket/Save-data-Device/Device-1');
var SaveDevice2 = require('./functionSocket/Save-data-Device/Device-2');
var SaveDevice3 = require('./functionSocket/Save-data-Device/Device-3');
var SaveDevice4 = require('./functionSocket/Save-data-Device/Device-4');
var SaveDevice5 = require('./functionSocket/Save-data-Device/Device-5');
var SaveDevice6 = require('./functionSocket/Save-data-Device/Device-6');

// Líst User Online
var ListUser = require('./functionSocket/Inform-User/index');


// var WarningTheif = require('');
var arr = [];
var ArrUsers=[];
var arrName = [];
//Khi có mệt kết nối được tạo giữa Socket Client và Socket Server
io.on('connection', function (socket) { //'connection' (1) này khác gì với 'connection' (2)

  // DHT and save to Mongo Clound
    DHT11.DHT(socket, io, Data_DHT_Module.Data, arr);

    //lang nghe check switch
    DeviceOnOff.Device1(socket, io);
    DeviceOnOff.Device2(socket, io);
    DeviceOnOff.Device3(socket, io);
    DeviceOnOff.Device4(socket, io);
    DeviceOnOff.Device5(socket, io);
    DeviceOnOff.Device6(socket, io);

// Handle timer for sưitch
    TimerDevice.TimerDevice1(socket, io);
    TimerDevice.TimerDevice2(socket, io);
    TimerDevice.TimerDevice3(socket, io);
    TimerDevice.TimerDevice4(socket, io);
    TimerDevice.TimerDevice5(socket, io);
    TimerDevice.TimerDevice6(socket, io);

// Display User Online
    ListUser.ListUser(socket, io, ArrUsers, arrName);

// Listen Warnning and save to Database for Mongo-Clound
    WarningTheif.Thief(socket, io, SaveDataWarning_Thief_Module.Thief);
    WarningRainning.Rainning(socket, io, SaveDataWarning_Rainning_Module.Ranning);

// Save history control switch to database in Mongo-Clound
    SaveDevice1.SaveDevice1(socket, io, SaveDataDeviceModule.Device1);
    SaveDevice2.SaveDevice2(socket, io, SaveDataDeviceModule.Device2);
    SaveDevice3.SaveDevice3(socket, io, SaveDataDeviceModule.Device3);
    SaveDevice4.SaveDevice4(socket, io, SaveDataDeviceModule.Device4);
    SaveDevice5.SaveDevice5(socket, io, SaveDataDeviceModule.Device5);
    SaveDevice6.SaveDevice6(socket, io, SaveDataDeviceModule.Device6);

});


//---------------------
module.exports = socketio;
