var socket = io.connect('http://vanvietonline.herokuapp.com/');

      // Hàm show kết quả

      $("#btn3").click( function(){
        // audio
        var beepOne = $("#beep-one")[0];
        beepOne.play();
        
      if( $(this).is(':checked') ){
        socket.emit("client-send-lamp3-on", "on");
      } else{
        socket.emit("client-send-lamp3-off", "off");
      }
      });

      // Send news on the socket
      socket.on('server-send-lamp3-on', function (data) {
        $("#btn3").prop("checked", true);
      });

      socket.on('server-send-lamp3-off', function (data) {
        $("#btn3").prop("checked", false);
      });
