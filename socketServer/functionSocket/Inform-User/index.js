
module.exports = {
  ListUser: (socket, io, ArrUser)=>{
        // Send news on the socket
        socket.on('Client-send-infor-User-Online', function (data) {
          ArrUser.push(data.avatar);
          // socket.Username = data.user;
            io.sockets.emit("Server-send-list-infor-User-Online",ArrUser);
        });

  }
};
