var socket = io.connect('http://vanvietonline.herokuapp.com/');

      // Hàm show kết quả

      $("#btn1").click( function(i){
      if( $(this).is(':checked') ){
        socket.emit("client-send-lamp1-on", "on");

        var myStopFunction = setInterval(function(){
          $("#someElement").fadeOut(100).fadeIn(100);
        }, 500);
        
      $("#someElement").click(function(){
        clearInterval(myStopFunction);
      })



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
        i=0;

        console.log('i = ' + i)

      });
