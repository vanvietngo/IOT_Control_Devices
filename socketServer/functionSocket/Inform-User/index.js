module.exports = {
    ListUser: (socket, io, ArrUser) => {
        // Send news on the socket
        socket.on('Client-send-infor-User-Online', function(data) {
            ArrUser.push(data.avatar);
            console.log('data.avater = ' + data.avatar);
            socket.avatar = data.avatar;
            io.sockets.emit("Server-send-list-infor-User-Online", ArrUser);
        });
        socket.on('disconnect', function() {
            console.log('arr = ' + ArrUser);
            if(socket.avatar != null) {
                ArrUser.splice(ArrUser.indexOf(socket.avatar), 1);
                socket.broadcast.emit("Server-send-list-infor-User-Online", ArrUser);
            }
        });
    }
}
