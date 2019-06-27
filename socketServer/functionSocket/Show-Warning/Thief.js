
module.exports = {
  Thief: (socket, io)=>{
        // Send news on the socket
        socket.on('client-send-Thief', function (data) {
            io.sockets.emit("server-send-rainning");
        });

        // socket2.on('client-send-lamp2-off', function (data) {
        //     io2.sockets.emit("server-send-lamp2-off", {status:"off 2"});
        //
        // });
  }

};
