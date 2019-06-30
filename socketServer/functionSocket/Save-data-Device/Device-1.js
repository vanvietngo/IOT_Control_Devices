module.exports = {

    SaveDevice1: (socket, io) => {
      socket.on('client-send-save-to-DB-of-Device-1', function (data) {

      var infor = data;
      io.sockets.emit("Server-send-save-to-DB-of-Device-1", infor);
      console.log(infor.user);
      console.log(infor.status);
      });
    }
};
