
module.exports = {
  Rainning: (socket, io, dataModel)=>{
        // Send news on the socket
        socket.on('client-ESP-send-Rainning', function (data) {
          console.log('da nhan dc rainning tu essp')
          var now = new Date();
          dataModel.create({
            Time: new Date(now + " GMT-0700").toUTCString(),
            Status:'ON'
          });
            io.sockets.emit("server-send-rainning");
        });
  }
};
