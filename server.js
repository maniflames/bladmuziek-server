const { spawn } = require('child_process');
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

//I know this is not the best way but the max size is 4.29 billion elements so with a restart every 3 hours it should be alright
let history = [{time: 0}]; 
let lightIndex = -1;

io.on('connection', (socket) => {
    console.log('new connection') 

    socket.on('noteRequest', (data) => {
        let touch = data.payload
        lightIndex = lightIndex++

        if (lightIndex > 5) {
            lightIndex = 0
        }

        if(touch.time - history[history.length - 1].time > 510) {
            console.log('touch')
            const lights = spawn('python3', ['./lights.py', lightIndex])
            lights.stdout.on('data', (out) => {
                console.log('[lights] ' + out.toString('utf8'))
            })
        }

        history.push(touch)
        socket.emit('noteRequest', data) 
    })  
})