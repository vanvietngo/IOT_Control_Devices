
module.exports = {
  Device1: (socket, io)=>{
        // Send news on the socket
        socket.on('client-send-lamp1-on', function (data) {
            io.sockets.emit("server-send-lamp1-on");

        });

        socket.on('client-send-lamp1-off', function (data) {
            io.sockets.emit("server-send-lamp1-off");

        });

        socket.on('client-send-save-to-DB-of-Device-1', function (data) {
            console.log("Data on off sw : => " + data);

        });
  },
  Device2: (socket2, io2)=>{
        // Send news on the socket
        socket2.on('client-send-lamp2-on', function (data) {
            io2.sockets.emit("server-send-lamp2-on");

        });

        socket2.on('client-send-lamp2-off', function (data) {
            io2.sockets.emit("server-send-lamp2-off");

        });
  },

  Device3: (socket, io)=>{
        // Send news on the socket
        socket.on('client-send-lamp3-on', function (data) {
            io.sockets.emit("server-send-lamp3-on");

        });

        socket.on('client-send-lamp3-off', function (data) {
            io.sockets.emit("server-send-lamp3-off");

        });
  },

  Device4: (socket, io)=>{
        // Send news on the socket
        socket.on('client-send-lamp4-on', function (data) {
            io.sockets.emit("server-send-lamp4-on");

        });

        socket.on('client-send-lamp4-off', function (data) {
            io.sockets.emit("server-send-lamp4-off");

        });
  },
  Device5: (socket, io)=>{
        // Send news on the socket
        socket.on('client-send-lamp5-on', function (data) {
            io.sockets.emit("server-send-lamp5-on");

        });

        socket.on('client-send-lamp5-off', function (data) {
            io.sockets.emit("server-send-lamp5-off");

        });
  },
  Device6: (socket, io)=>{
        // Send news on the socket
        socket.on('client-send-lamp6-on', function (data) {
            io.sockets.emit("server-send-lamp6-on");

        });

        socket.on('client-send-lamp6-off', function (data) {
            io.sockets.emit("server-send-lamp6-off");

        });
  }

};
