
module.exports = {
  Rainning: (socket, io, dataModel)=>{
        // Send news on the socket
        socket.on('client-ESP-send-Rainning', function (data) {
          var now = new Date();
          dataModel.create({
            Time: new Date(now + " GMT-0700").toUTCString(),
            Status:'ON ( Rainning )'
          });
            io.sockets.emit("server-send-rainning");
        });
  }
};
