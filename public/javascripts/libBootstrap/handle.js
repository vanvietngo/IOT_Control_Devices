
// var socket = io.connect('http://192.168.1.104:3000');
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

  $(".nt").html("Temp: " + data.Temperature + " *C");
});

socket.on("Humidity-client", function(data){
  // append new value to the array
  arr.push(data);
  console.log(arr);


  $(".da").html("Humidity: " + data.Humidity + " %");
  arr = [];
});


// new Chart(document.getElementById("line-chart"), {
//   type: 'line',
//   data: {
//     labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
//     datasets: [{
//         data: [86,114,106,106,107,111,133,221,783,2478],
//         label: "Châu Phi",
//         borderColor: "#3e95cd",
//         fill: false
//       }, {
//         data: [282,350,411,502,635,809,947,1402,3700,5267],
//         label: "Châu Á",
//         borderColor: "#8e5ea2",
//         fill: false
//       }, {
//         data: [168,170,178,190,203,276,408,547,675,734],
//         label: "Châu Âu",
//         borderColor: "#3cba9f",
//         fill: false
//       }, {
//         data: [40,20,10,16,24,38,74,167,508,784],
//         label: "Châu Mỹ Latin",
//         borderColor: "#e8c3b9",
//         fill: false
//       }, {
//         data: [6,3,2,2,7,26,82,172,312,433],
//         label: "Bắc Mỹ",
//         borderColor: "#c45850",
//         fill: false
//       }
//     ]
//   },
//   options: {
//     title: {
//       display: true,
//       text: 'Đồ thị tăng trưởng dân số thế giới'
//     }
//   }
// });
