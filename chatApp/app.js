// npm install express
// npm install socket.io


var socket = require('socket.io'),
    http = require('http'),
    server = http.createServer(),
    socket = socket.listen(server);

socket.on('connection', function(connection) {
    console.log('User Connected');
    connection.on('message', function(msg){
    	console.log(msg);
        socket.emit('message', msg);
    });
});

server.listen(3000, function(){
    console.log('Server started');
});


// const express = require('express');
// const http = require('http');
// const app = express();

// var server = app.listen(3000)
// var io = require('socket.io').listen(server);

// const host = server.address().address;
// const port = server.address().port;

// app.get('/', function (req, res) {
//   res.send(`Server is running on ${host}:${port}`);
// });

// console.log(`Server listening on ${host}:${port}`);