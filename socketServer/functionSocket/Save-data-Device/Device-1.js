module.exports = {

    SaveDevice: (socket, io) => {
      socket.on('client-send-save-to-DB-of-Device-1', function (data) {
      console.log(data.user);
      console.log(data.status);
      });
    }
};
