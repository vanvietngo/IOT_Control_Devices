module.exports = {

    TimerDevice1: (socket, io) => {
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

    TimerDevice2: (socket, io) => {
        socket.on('Client-send-Timeout-2', function () {
            io.sockets.emit("Server-send-Timeout-2");
        });

        socket.on('Client-send-ValueTimer-2', function (data) {
            io.sockets.emit("Server-send-ValueTimer-2", data);
        });

        socket.on('Client-send-Cancel-Timer-2', function () {
            io.sockets.emit("Server-send-Cancel-Timer-2");
        });

    },

    TimerDevice3: (socket, io) => {
        socket.on('Client-send-Timeout-3', function () {
            io.sockets.emit("Server-send-Timeout-3");
        });

        socket.on('Client-send-ValueTimer-3', function (data) {
            io.sockets.emit("Server-send-ValueTimer-3", data);
        });

        socket.on('Client-send-Cancel-Timer-3', function () {
            io.sockets.emit("Server-send-Cancel-Timer-3");
        });

    },

    TimerDevice4: (socket, io) => {
        socket.on('Client-send-Timeout-4', function () {
            io.sockets.emit("Server-send-Timeout-4");
        });

        socket.on('Client-send-ValueTimer-4', function (data) {
            io.sockets.emit("Server-send-ValueTimer-4", data);
        });

        socket.on('Client-send-Cancel-Timer-4', function () {
            io.sockets.emit("Server-send-Cancel-Timer-4");
        });

    },

    TimerDevice5: (socket, io) => {
        socket.on('Client-send-Timeout-5', function () {
            io.sockets.emit("Server-send-Timeout-5");
        });

        socket.on('Client-send-ValueTimer-5', function (data) {
            io.sockets.emit("Server-send-ValueTimer-5", data);
        });

        socket.on('Client-send-Cancel-Timer-5', function () {
            io.sockets.emit("Server-send-Cancel-Timer-5");
        });

    },

    TimerDevice6: (socket, io) => {
        socket.on('Client-send-Timeout-6', function () {
            io.sockets.emit("Server-send-Timeout-6");
        });

        socket.on('Client-send-ValueTimer-6', function (data) {
            io.sockets.emit("Server-send-ValueTimer-6", data);
        });

        socket.on('Client-send-Cancel-Timer-6', function () {
            io.sockets.emit("Server-send-Cancel-Timer-6");
        });

    }
};
