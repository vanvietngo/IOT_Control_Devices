// var socket = io.connect('http://192.168.1.104:3000');
var socket = io.connect('http://localhost:3000');


socket.on("time-client", function(data){
  console.log(data);
  // console.log(data.Time);
  // data2 = JSON.parse(data);
  // console.log(data2.Time);
  $(".timee").html("Day - time: " + Date());
    // $(".timee").append("<p>" + data.Time +  "</p>");
});

socket.on("Temperature-client", function(data){
  console.log(data);

  $(".nt").html("Temperature: " + data.Temperature + " *C");
});

socket.on("Humidity-client", function(data){
  console.log(data);

  $(".da").html("Humidity: " + data.Humidity + " %");
});
