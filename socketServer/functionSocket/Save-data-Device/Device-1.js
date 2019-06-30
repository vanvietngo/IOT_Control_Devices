module.exports = {
    SaveDevice1: (socket, io, modelDevice1) => {
      socket.on('client-send-save-to-DB-of-Device-1', function (data) {
      var infor = data;
      var now = new Date();
      // var time = new Date(now + " GMT-0700").toUTCString();

      modelDevice1.create({
        Time: new Date(now + " GMT-0700").toUTCString(),
        DeviceName:"Device 1",
        User: data.user,
        Status: data.status,
        // Timer:String
      });

      io.sockets.emit("Server-send-save-to-DB-of-Device-1");
      console.log(infor.user);
      console.log(infor.status);
      socket.on('Esp-confirm-save-data-for-device-1', function () {
        // create to database
      });
    });
  }
};
