module.exports = {

    TimerLamp1: (socket, io) => {
        socket.on('Client-send-Timeout-1', function () {
            io.sockets.emit("Server-send-Timeout-1");
        });

        socket.on('Client-send-ValueTimer-1', function (data) {
            io.sockets.emit("Server-send-ValueTimer-1", data);
        });

        socket.on('Client-send-Cancel-Timer-1', function () {
            io.sockets.emit("Server-send-Cancel-Timer-1");
        });

    },

    TimerLamp2: (socket, io) => {
        socket.on('Client-send-Timeout-2', function () {
            io.sockets.emit("Server-send-Timeout-2");
        });

        socket.on('Client-send-ValueTimer-2', function (data) {
            io.sockets.emit("Server-send-ValueTimer-2", data);
            console.log("dsts =>>>>>>>> " + data);
        });

        socket.on('Client-send-Cancel-Timer-2', function () {
            io.sockets.emit("Server-send-Cancel-Timer-2");
        });

    }
};
