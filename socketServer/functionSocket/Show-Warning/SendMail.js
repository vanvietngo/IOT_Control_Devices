module.exports = {
// On chuc nang kem an toan tren mail
// https://myaccount.google.com/lesssecureapps?pli=1

// unlock cap cha
// https://accounts.google.com/b/0/DisplayUnlockCaptcha
// npm install nodemailer


    FunctionSendEmail: () => {
      var nodemailer = require('nodemailer');

      const option = {
          service: 'gmail',
          auth: {
              user: 'viet.ngovanviet@gmail.com', // email hoặc username
              pass: '025632209' // password
          }
      };
      var transporter = nodemailer.createTransport(option);

      transporter.verify(function(error, success) {
          // Nếu có lỗi.
          if (error) {
              console.log('erro email = ' + error);
          } else { //Nếu thành công.
              console.log('Kết nối thành công!');
              var mail = {
                  from: 'viet.ngovanviet@gmail.com', // Địa chỉ email của người gửi
                  to: 'ngohuudang.dang@gmail.com, nghia1997cont@gmail.com', // Địa chỉ email của người gửi
                  subject: 'Cảnh báo trộm', // Tiêu đề mail
                  text: 'Cảnh Báo có người vào nhà !!!', // Nội dung mail dạng text
              };
              //Tiến hành gửi email
              transporter.sendMail(mail, function(error, info) {
                  if (error) { // nếu có lỗi
                      console.log(error);
                  } else { //nếu thành công
                      console.log('Email sent: ' + info.response);
                  }
              });
          }
      });


     }
};
