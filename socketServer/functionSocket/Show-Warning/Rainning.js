
module.exports = {
  Rainning: (socket, io)=>{
        // Send news on the socket
        socket.on('client-send-rainning', function (data) {
            io.sockets.emit("server-send-rainning");
        });
  }
};
