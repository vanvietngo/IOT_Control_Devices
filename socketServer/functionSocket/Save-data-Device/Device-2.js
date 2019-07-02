module.exports = {
    SaveDevice2: (socket, io, modelDevice2) => {
      socket.on('client-send-save-to-DB-of-Device-2', function (data) {
      var infor = data;
      // var time = new Date(now + " GMT-0700").toUTCString();
      var now = new Date();


      io.sockets.emit("Server-send-save-to-DB-of-Device-2");
      console.log(infor.user);
      console.log(infor.status);
      socket.on('Esp-confirm-save-data-for-device-2', function () {
        // create to database
        modelDevice2.create({
          Time: new Date(now + " GMT-0700").toUTCString(),
          DeviceName:"Device 2",
          User: data.user,
          Status: data.status,
          // Timer:String
        });
      });
    });
  }
};
