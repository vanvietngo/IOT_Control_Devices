
module.exports = {
  lamp2: (socket2, io2)=>{
        // Send news on the socket
        socket2.on('client-send-lamp2-on', function (data) {
            console.log(data);
            console.log("da nhan dc status on");
            io2.sockets.emit("server-send-lamp2-on", {status:"on 2"});

        });

        socket2.on('client-send-lamp2-off', function (data) {
            console.log(data);
            console.log("da nhan dc status off");

            io2.sockets.emit("server-send-lamp2-off", {status:"off 2"});

        });
  },
 lamp1: (socket, io)=>{
       // Send news on the socket
       socket.on('client-send-lamp1-on', function (data) {
           console.log(data);
           console.log("da nhan dc status on");
           io.sockets.emit("server-send-lamp1-on", {status:"on 1"});

       });

       socket.on('client-send-lamp1-off', function (data) {
           console.log(data);
           console.log("da nhan dc status off");

           io.sockets.emit("server-send-lamp1-off", {status:"off 1"});

       });
 }


};
