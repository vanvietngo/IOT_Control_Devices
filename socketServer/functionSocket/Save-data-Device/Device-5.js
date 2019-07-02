module.exports = {
    SaveDevice5: (socket, io, modelDevice5) => {
      socket.on('client-send-save-to-DB-of-Device-5', function (data) {
      var infor = data;
      // var time = new Date(now + " GMT-0700").toUTCString();
      var now = new Date();


      io.sockets.emit("Server-send-save-to-DB-of-Device-5");
      console.log(infor.user);
      console.log(infor.status);
      socket.on('Esp-confirm-save-data-for-device-5', function () {
        // create to database
        modelDevice5.create({
          Time: new Date(now + " GMT-0700").toUTCString(),
          DeviceName:"Device 5",
          User: data.user,
          Status: data.status,
          // Timer:String
        });
      });
    });
  }
};
