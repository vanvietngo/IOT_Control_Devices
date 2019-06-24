module.exports = {

    TimerLamp1: (socket, io) => {
        socket.on('Client-send-Timeout', function () {
            io.sockets.emit("Server-send-Timeout");
        });

        socket.on('Client-send-ValueTimer', function (data) {
            io.sockets.emit("Server-send-ValueTimer", data);
            console.log('Server-send-ValueTimer  ' + data)
        });

        socket.on('Client-send-Cancel-Timer', function () {
            io.sockets.emit("Server-send-Cancel-Timer");
        });

    }
};
