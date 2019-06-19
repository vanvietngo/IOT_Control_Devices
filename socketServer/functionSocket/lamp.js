
module.exports = {

 lamp1: (socket, io)=>{
       // Send news on the socket
       socket.on('client-send-lamp1-on', function (data) {
           console.log(data);
           console.log("da nhan dc status on");
           io.sockets.emit("server-send-lamp1-on", {status:"on"});

       });

       socket.on('client-send-lamp1-off', function (data) {
           console.log(data);
           console.log("da nhan dc status off");
           io.sockets.emit("server-send-lamp1-off", {status:"off"});

       });
 }
};
