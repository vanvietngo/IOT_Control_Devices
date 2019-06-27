var socket = io.connect('http://vanvietonline.herokuapp.com/');

      // Hàm show kết quả

      $("#btn3").click( function(i){
      if( $(this).is(':checked') ){
        socket.emit("client-send-lamp3-on");
      } else{
        socket.emit("client-send-lamp3-off");
      }
      });

      // Send news on the socket
      socket.on('server-send-lamp3-on', function () {
        $("#btn3").prop("checked", true);
      });

      socket.on('server-send-lamp3-off', function () {
        $("#btn3").prop("checked", false);
      });
