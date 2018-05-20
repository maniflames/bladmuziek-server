const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

const port = 8080
app.use(express.static('static'))

server.listen(port, () => {
    console.log('running on ' + port)
})

app.get('/', (req, res) => {
    res.send('static/index.html')
})

let base;
let units = [];

io.on('connection', (socket) => {
    console.log('new connection') 
    if(!base){
        base = socket.id
    } else {
        units.push(socket.id)
    }

    socket.on('noteRequest', (data) => {
        //socket emits only to base, if you send this from base nothing will happen
        //a socket can't emit data to itself
        console.log(data.payload)
        socket.to(base).emit('noteRequest', data) 
    })  

    //TODO: detect base disconnect & unset? 
})