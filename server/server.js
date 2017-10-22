"use strict"
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http , {serveClient: true});
const path = require('path');


app.get('/', (req, res) =>{
  res.sendFile( path.join(__dirname,'..','views','index.html'));
});


io.on('connection', (socket) => {
  console.log("connected new client");

  socket.on('message', (msg) => {
    // io.emit('newMessage', msg);// чьлюы сообщение появилось всез юзеров кроми инициатора сообщения,...
    socket.broadcast.emit('newMessage', msg);
  });


});














http.listen(3000, () => {
  console.log("Server run on 3000 port");
})
