socket.on('server-send-rainning', function () {
  console.log('da nhan rainning');
  var temp_Cancel = 0;
  var myStop_Function_Rainning = setInterval(function(){
    temp_Cancel += 1;
    $(".class-Rainning").fadeOut(100).fadeIn(100);
  }, 500);
  if(temp_Cancel > 20){
    clearInterval(myStop_Function_Rainning);
  }
  $(".class-Rainning").click(function(){
    clearInterval(myStop_Function_Rainning);
  })
});
