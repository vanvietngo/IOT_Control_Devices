module.exports = {

    Time: (socket, io, arr) => {
        //khi lắng nghe được lệnh "DHT-Temperature // DHT-Humidity" với một tham số, và chúng ta đặt tên tham số đó là data. Mình thích thì mình đặt thôi
        socket.on('Time', function (data) {
            io.sockets.emit("time-client", data);
            arr.push(data.Time);

        });
    }
};
