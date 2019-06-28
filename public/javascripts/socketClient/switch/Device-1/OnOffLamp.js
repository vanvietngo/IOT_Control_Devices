var socket = io.connect('http://vanvietonline.herokuapp.com/');

      // Hàm show kết quả

      $("#btn1").click( function(i){
        // audio
        var beepOne = $("#beep-one")[0];
        beepOne.play();

      if( $(this).is(':checked') ){
        socket.emit("client-send-lamp1-on", "on");
      } else{
        socket.emit("client-send-lamp1-off", "off");
      }
      });

      // Send news on the socket
      socket.on('server-send-lamp1-on', function (data) {
        $("#btn1").prop("checked", true);
      });

      socket.on('server-send-lamp1-off', function (data) {
        $("#btn1").prop("checked", false);
      });
