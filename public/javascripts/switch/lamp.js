var socket = io.connect('http://vanvietonline.herokuapp.com/');

      // Hàm show kết quả
      function show_result()
            {
              // Lấy hai thẻ HTML
              var input1 = document.getElementById('btn1');
              var input2 = document.getElementById('btn2');

              // Gán nội dung ô input vào thẻ div
              if(input1.checked){
                socket.on("lamp1-on", function(data){
                  // append new value to the array
                  // arr.push(data);

                });

              }else{
                socket.on("lamp1-off", function(data){
                  // append new value to the array
                  // arr.push(data);

                });


              }
            }
