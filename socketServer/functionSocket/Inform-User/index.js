module.exports = {
    ListUser: (socket, io, ArrUser, arrName) => {
        // Send news on the socket
        socket.on('Client-send-infor-User-Online', function(data) {
            ArrUser.push(data.avatar);
            arrName.push(data.user);
console.log('arrName = ' + arrName);
            socket.avatar = data.avatar;
            socket.userr = data.userr;
            io.sockets.emit("Server-send-list-infor-User-Online", {
              ArrUser:ArrUser,
              arrName:arrName
            });
        });
        socket.on('disconnect', function() {
            console.log('arr = ' + ArrUser);
            if(socket.avatar != null) {
                ArrUser.splice(ArrUser.indexOf(socket.avatar), 1);
                arrName.splice(arrName.indexOf(socket.userr), 1);
                socket.broadcast.emit("Server-send-list-infor-User-Online", {
                  ArrUser:ArrUser,
                  arrName:arrName
                });
            console.log('arr dis = ' + arrName)    
            }
        });
    }
}
