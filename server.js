//TODO: it would be great to just use http for something this small
const spawn = require("child_process").spawn;
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    console.log(req.query)
    if(req.query.sounds && req.query.index){
        spawn('python3', ["./main.py", req.query.sounds, req.query.index])
    }
    res.send('completed')
})

app.listen(8080, () => console.log('App running on port 8080'))
setTimeout(() => { spawn('python3', ["./main.py", 'system', 0]) }, 3000)