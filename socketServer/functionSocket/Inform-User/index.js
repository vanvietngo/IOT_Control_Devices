
module.exports = {
  ListUser: (socket, io, ArrUser)=>{
        // Send news on the socket
        socket.on('Client-send-infor-User-Online', function (data) {
          ArrUser.push(data.avatar);
          console.log('data.avater = ' + data.avatar);
          socket.avatar = data.avatar;
            io.sockets.emit("Server-send-list-infor-User-Online",ArrUser);
        });

        socket.on('disconnect', function () {
          console.log("user disconeect => " + socket.avatar);
console.log('arr = ' + ArrUser);
          ArrUser.splice(
            ArrUser.indexOf(socket.avatar), 1
          );
          // console.log("user disconeect => " + socket.AvatarUser);
          console.log('arr after delete = ' + ArrUser);
          // delete ArrUser[socket.AvatarUser];
          io.sockets.emit("Server-send-list-infor-User-Online",ArrUser);

  });
}
}
