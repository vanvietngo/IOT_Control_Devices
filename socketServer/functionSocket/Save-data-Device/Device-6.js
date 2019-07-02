module.exports = {
    SaveDevice6: (socket, io, modelDevice6) => {
      socket.on('client-send-save-to-DB-of-Device-6', function (data) {
      var infor = data;
      // var time = new Date(now + " GMT-0700").toUTCString();
      var now = new Date();


      io.sockets.emit("Server-send-save-to-DB-of-Device-6");
      console.log(infor.user);
      console.log(infor.status);
      socket.on('Esp-confirm-save-data-for-device-6', function () {
        // create to database
        modelDevice6.create({
          Time: new Date(now + " GMT-0700").toUTCString(),
          DeviceName:"Device 6",
          User: data.user,
          Status: data.status,
          // Timer:String
        });
      });
    });
  }
};
