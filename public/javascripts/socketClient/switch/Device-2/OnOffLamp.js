var socket = io.connect('http://vanvietonline.herokuapp.com/');

      // Hàm show kết quả

      $("#btn2").click( function(){
        // audio
        var beepOne = $("#beep-one")[0];
        beepOne.play();
        
      if( $(this).is(':checked') ){
        socket.emit("client-send-lamp2-on", "on");
      } else{
        socket.emit("client-send-lamp2-off", "off");
      }
      });

      // Send news on the socket
      socket.on('server-send-lamp2-on', function (data) {
        $("#btn2").prop("checked", true);
      });

      socket.on('server-send-lamp2-off', function (data) {
        $("#btn2").prop("checked", false);
      });
