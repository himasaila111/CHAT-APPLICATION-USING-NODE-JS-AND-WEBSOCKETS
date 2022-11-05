const express = require('express');
const socket = require('socket.io');
const app = express();


const server = app.listen(3000, ()=>{
    console.log('listening on 3000');
})

// static files
app.use(express.static('public'));

let io = socket(server);

io.on('connection',(socket)=>{
    console.log("made socket connection");
    
    socket.on('chat',(data)=>{
        io.sockets.emit('chat',data);
    })
    socket.on('typing',(data)=>{
        socket.broadcast.emit('typing', data);
    })
})

