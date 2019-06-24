module.exports = {

    TimerLamp1: (socket, io) => {
        //khi lắng nghe được lệnh "DHT-Temperature // DHT-Humidity" với một tham số, và chúng ta đặt tên tham số đó là data. Mình thích thì mình đặt thôi
        socket.on('Client-send-Timeout', function () {
            io.sockets.emit("Server-send-Timeout");
        });

        socket.on('Client-send-ValueTimer', function (data) {
            io.sockets.emit("Server-send-ValueTimer", data);
        });

        socket.on('Client-send-Cancel-Timer', function () {
            io.sockets.emit("Server-send-Cancel-Timer");
        });

    }
};
