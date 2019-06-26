var socket = io.connect('http://vanvietonline.herokuapp.com/');

      // Hàm show kết quả

      $("#btn1").click( function(){
      if( $(this).is(':checked') ){
        socket.emit("client-send-lamp1-on", "on");
        var i = 100
        while(i){
          $("#someElement").fadeOut(100).fadeIn(100);
          i-=1;
        }

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
          console.log("da nhan dc server-send-lamp1-on 1");
      });

      socket.on('server-send-lamp1-off', function (data) {
        $("#btn1").prop("checked", false);
          console.log(data);
          console.log("da nhan dc server-send-lamp1-off 1");
      });
