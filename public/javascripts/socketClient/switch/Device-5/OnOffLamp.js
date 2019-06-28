var socket = io.connect('http://vanvietonline.herokuapp.com/');

      // Hàm show kết quả

      $("#btn5").click( function(i){
        // audio
        var beepOne = $("#beep-one")[0];
        beepOne.play();
        
      if( $(this).is(':checked') ){
        socket.emit("client-send-lamp5-on", "on");
      } else{
        socket.emit("client-send-lamp5-off", "off");
      }
      });

      // Send news on the socket
      socket.on('server-send-lamp5-on', function (data) {
        $("#btn5").prop("checked", true);
      });

      socket.on('server-send-lamp5-off', function (data) {
        $("#btn5").prop("checked", false);
      });
