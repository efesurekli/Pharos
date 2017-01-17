// const socketioJwt = require('socketio-jwt');
const exampleData = require('./../../../data/exampleData.js');
const socketAuth = require('./auth').socketAuth;

// const getNotificationsFromDB = (userID) => {
//   return exampleData;
// }
// const insertNotification = (event) => {
//   return
// }
module.exports = (io) => {
  socketAuth(io, (socket) => {
    socket.emit('text', 'Hello from Server');
    socket.on('createRoom', function (roomName) {
      socket.join(roomName);
      rooms.push(roomName);

      socket.on('getNotifications', (callback, userID) => {

        // using userID, server find the proper events
        // send back events
        callback(getNotificationsFromDB(userID, settings));
        // io.to(roomName).emit   events', {events: roomName});
      });

      socket.on('reportNotification', function(notification) {
        console.log("send notifications to " + notification); //
        // server finds room names
        // foreach  room name send notifications to client
        insertNotification(notification)
        .then((userIds, notification)=> {
          userIds.forEach((userId) => {
            io.to(userId).emit('pushNotification', notification);
          });
        });
      });

      socket.on('setUserConfigurations', (userConfigurations) => {
        // updateUserConficuration(userConfigurations)
        // send back notifications
        // io.to(userConfigurations.userId).emit('pushNotification', notifications);
      });
    });
  });
};

