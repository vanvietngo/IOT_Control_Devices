var socket = io.connect('http://vanvietonline.herokuapp.com/');

      // Hàm show kết quả

      $("#btn6").click( function(i){
        // audio
        var beepOne = $("#beep-one")[0];
        beepOne.play();
        
      if( $(this).is(':checked') ){
        socket.emit("client-send-lamp6-on", "on");
      } else{
        socket.emit("client-send-lamp6-off", "off");
      }
      });

      // Send news on the socket
      socket.on('server-send-lamp6-on', function (data) {
        $("#btn6").prop("checked", true);
      });

      socket.on('server-send-lamp6-off', function (data) {
        $("#btn6").prop("checked", false);
      });
