
module.exports = {
  Thief: (socket, io)=>{
        // Send news on the socket
        socket.on('client-ESP-send-Thief', function (data) {
            io.sockets.emit("server-send-Thief");
        });
  }

};
