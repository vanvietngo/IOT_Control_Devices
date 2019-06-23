var socket = io.connect('http://vanvietonline.herokuapp.com/');

      // Hàm show kết quả

      $("#btn2").click( function(){
      if( $(this).is(':checked') ){
        socket.emit("client-send-lamp2-on", "on");
        console.log("staus lamp2 on");
      } else{
        socket.emit("client-send-lamp2-off", "off");
        console.log("status lamp2 ==> off")
      }
      });

      // Send news on the socket
      socket.on('server-send-lamp2-on', function (data) {
        $("#btn2").prop("checked", true);
          console.log(data);
          console.log("da nhan dc status on 2");
          // io.sockets.emit("server-send-lamp1-on", {status:"on"});

      });

      socket.on('server-send-lamp2-off', function (data) {
        $("#btn2").prop("checked", false);
          console.log(data);
          console.log("da nhan dc status off 2");

          // io.sockets.emit("server-send-lamp1-off", {status:"on"});

      });
