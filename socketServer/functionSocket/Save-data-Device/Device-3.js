module.exports = {
    SaveDevice3: (socket, io, modelDevice3) => {
      socket.on('client-send-save-to-DB-of-Device-3', function (data) {
      var infor = data;
      // var time = new Date(now + " GMT-0700").toUTCString();
      var now = new Date();


      io.sockets.emit("Server-send-save-to-DB-of-Device-3");
      console.log(infor.user);
      console.log(infor.status);
      socket.on('Esp-confirm-save-data-for-device-3', function () {
        // create to database
        modelDevice3.create({
          Time: new Date(now + " GMT-0700").toUTCString(),
          DeviceName:"Device 3",
          User: data.user,
          Status: data.status,
          // Timer:String
        });
      });
    });
  }
};
