
module.exports = {
  ListUser: (socket, io, ArrUser)=>{
        // Send news on the socket
        socket.on('Client-send-infor-User-Online', function (data) {
          ArrUser.push(data.user);
          console.log('data.avater = ' + data.user);
          socket.user = data.user;
            io.sockets.emit("Server-send-list-infor-User-Online",ArrUser);
        });

        socket.on('disconnect', function () {
          console.log("user disconeect => " + socket.user);
console.log('arr = ' + ArrUser);
          ArrUser.splice(
            ArrUser.indexOf(socket.user), 1
          );
          // console.log("user disconeect => " + socket.AvatarUser);
          console.log('arr after delete = ' + ArrUser);
          // delete ArrUser[socket.AvatarUser];
          io.sockets.emit("Server-send-list-infor-User-Online",ArrUser);

  });
}
}
