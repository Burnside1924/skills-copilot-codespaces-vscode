// Create web server
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static(__dirname + '/public'));

server.listen(3000, function(){
  console.log('listening on *:3000');
});

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

var comments = [];
io.on('connection', function(socket){
  console.log('a user connected');
  socket.emit('init', comments);
  socket.on('comment', function(msg){
    comments.push(msg);
    io.emit('comment', msg);
  });
});