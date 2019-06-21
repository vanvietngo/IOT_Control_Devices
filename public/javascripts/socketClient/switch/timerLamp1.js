var socket = io.connect('http://vanvietonline.herokuapp.com/');


$(".button-timer-Lamp-1").click( function(){
//   socket.emit("client-send-lamp1-timer", $(".timer-Lamp-1").val());
//   console.log("timer-Lamp-1 :  " +  $(".timer-Lamp-1").val());
// $(".value-timer-lamp-1").html("123456" + $(".timer-Lamp-1").val());
if( $("#btn1").is(':checked') ){
  $(".value-timer-lamp-1").html("After  " + $(".timer-Lamp-1").val()/1000 + " s Lamp off");
}else{
  $(".value-timer-lamp-1").html("after " + $(".timer-Lamp-1").val()/1000 + " s lamp on");
}
console.log("set timer on - off");

var timerForLamp = setTimeout(function(){
     if( $("#btn1").is(':checked') ){
       socket.emit("client-send-lamp1-off", "off");
       console.log("staus lamp1 on");
     } else{
       socket.emit("client-send-lamp1-on", "on");
       console.log("status lamp1 ==> off")
     }
}, $(".timer-Lamp-1").val());
});
