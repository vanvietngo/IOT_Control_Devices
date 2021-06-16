var socket = io.connect('http://vanvietonline.herokuapp.com/');

      // Hàm show kết quả

      $("#btn1").click( function(){
      if( $(this).is(':checked') ){
        socket.emit("client-send-lamp1-on", "on");
        console.log("staus lamp1 on");
      } else{
        socket.emit("client-send-lamp1-off", "off");
        console.log("status lamp1 ==> off")
      }
      });

      // Send news on the socket
      socket.on('server-send-lamp1-on', function (data) {
        $("#btn1").prop("checked", true);
          console.log(data);
          console.log("da nhan dc status on");
          // io.sockets.emit("server-send-lamp1-on", {status:"on"});

      });

      socket.on('server-send-lamp1-off', function (data) {
        $("#btn1").prop("checked", false);
          console.log(data);
          console.log("da nhan dc status off");

          // io.sockets.emit("server-send-lamp1-off", {status:"on"});

      });
              // lamp 2
              // if(input1.checked){
              //   socket.emit("client-send-lamp2-on", {status:"on"});
              //
              // }else{
              // socket.emit("client-send-lamp2-off", {status:"off"});
              //
              // }
            // }
