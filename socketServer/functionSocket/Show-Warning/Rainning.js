
module.exports = {
  Rainning: (socket, io, dataModel)=>{
        // Send news on the socket
        socket.on('client-send-rainning', function (data) {
          var now = new Date();
          dataModel.create({
            Time: new Date(now + " GMT-0700").toUTCString(),
            Status:'ON'
          });
            io.sockets.emit("server-send-rainning");
        });
  }
};
