module.exports = {

    Humidity: (socket, io, arr, data) => {
        // Send news on the socket
        socket.on('DHT-Humidity', function (data) {
            io.sockets.emit("Humidity-client", data);
            arr.push(data.Humidity);
            // add data to mongo by arr
            datta.create({
              time: arr[0],
              Temperature: arr[1],
              Humidity:arr[2]
            });
            arr = [];
        });
    }
};
