module.exports = {
    SaveDevice1: (socket, io, modelDevice4) => {
      socket.on('client-send-save-to-DB-of-Device-4', function (data) {
      var infor = data;
      // var time = new Date(now + " GMT-0700").toUTCString();
      var now = new Date();


      io.sockets.emit("Server-send-save-to-DB-of-Device-4");
      console.log(infor.user);
      console.log(infor.status);
      socket.on('Esp-confirm-save-data-for-device-4', function () {
        // create to database
        modelDevice4.create({
          Time: new Date(now + " GMT-0700").toUTCString(),
          DeviceName:"Device 4",
          User: data.user,
          Status: data.status,
          // Timer:String
        });
      });
    });
  }
};
