
module.exports = {
  Thief: (socket, io, dataModel, Send_Mail)=>{
        // Send news on the socket
        socket.on('client-ESP-send-Thief', function (data) {
          var now = new Date();
          dataModel.create({
            Time: new Date(now + " GMT-0700").toUTCString(),
            Status:'ON'
          });
            io.sockets.emit("server-send-Thief");
            var sendmail = Send_Mail;
        });
  }

};
