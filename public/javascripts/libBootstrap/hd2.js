
var socket = io.connect('http://vanvietonline.herokuapp.com/');
//--------------------------



//---------------------------

var arr = [];

socket.on("time-client", function(data){
  // console.log(data);
  // append new value to the array
  arr.push(data);

  $(".timee").html("Day - time: " + Date());
});

socket.on("Temperature-client", function(data){
  // console.log(data);
  // append new value to the array
  arr.push(data);

  $(".nt").html("Temperature: " + data.Temperature + " *C");
});

socket.on("Humidity-client", function(data){
  // append new value to the array
  arr.push(data);
  console.log(arr);



  $(".da").html("Humidity: " + data.Humidity + " %");
  arr = [];
});
