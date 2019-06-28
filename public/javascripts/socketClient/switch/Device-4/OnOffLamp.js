var socket = io.connect('http://vanvietonline.herokuapp.com/');

      // Hàm show kết quả

      $("#btn4").click( function(i){
        // audio
        var beepOne = $("#beep-one")[0];
        beepOne.play();
        
      if( $(this).is(':checked') ){
        socket.emit("client-send-lamp4-on", "on");
      } else{
        socket.emit("client-send-lamp4-off", "off");
      }
      });

      // Send news on the socket
      socket.on('server-send-lamp4-on', function (data) {
        $("#btn4").prop("checked", true);
      });

      socket.on('server-send-lamp4-off', function (data) {
        $("#btn4").prop("checked", false);
      });
