var socket = io.connect('http://localhost:3000');

var handle = document.getElementById('handle');
var message = document.getElementById('message');
var btn = document.getElementById('send');
var output = document.getElementById('output');
var feedback = document.getElementById('feedback');


// event emitter

btn.addEventListener('click',()=>{
    socket.emit('chat',{
        message: message.value,
        handle: handle.value
    });
});

message.addEventListener('keypress',()=>{
    socket.emit('typing', handle.value);
})



//event listener 

socket.on('chat',(data)=>{
    feedback.innerHTML = "";
    output.innerHTML += '<p><strong>' + data.handle + ': </strong>' +  data.message + '</p>';
})

socket.on('typing',(data)=>{
    feedback.innerHTML = '<p><strong>' + data + ': </strong>' + 'is typing a message....' + '</p>';
})

