module.exports = {
    ListUser: (socket, io, ArrUser) => {
      var arrUser = []
        // Send news on the socket
        socket.on('Client-send-infor-User-Online', function(data) {
            ArrUser.push(data.avatar);
            arrUser.push(data.user);

            socket.avatar = data.avatar;
            socket.userr = data.userr;
            io.sockets.emit("Server-send-list-infor-User-Online", {
              ArrUser:ArrUser,
              arrUser:arrUser
            });
        });
        socket.on('disconnect', function() {
            console.log('arr = ' + ArrUser);
            if(socket.avatar != null) {
                ArrUser.splice(ArrUser.indexOf(socket.avatar), 1);
                arrUser.splice(arrUser.indexOf(socket.user), 1);
                socket.broadcast.emit("Server-send-list-infor-User-Online", {
                  ArrUser:ArrUser,
                  arrUser:arrUser
                });
            }
        });
    }
}
