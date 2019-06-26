module.exports = {

    Temperature: (socket, io, arr) => {
        //khi lắng nghe được lệnh "DHT-Temperature // DHT-Humidity" với một tham số, và chúng ta đặt tên tham số đó là data. Mình thích thì mình đặt thôi
        socket.on('DHT-Temperature', function (data) {
            arr.push(Date());
            arr.push(data.Temperature);
            io.sockets.emit("Temperature-client", data);
            console.log("Arr 1111  = " + arr);

        });
    }
};
