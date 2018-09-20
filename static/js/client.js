window.addEventListener('load', init);
let socket = io();
let availableKeys = [32, 37, 38, 39, 40, 87, 65, 83, 68, 70, 71, 90, 88, 67, 86, 66, 78, 77, 72, 74, 75, 76];


function init() {
    document.addEventListener('keydown', function(e){ keyHandler(e) }); 
}

function keyHandler(e) {
    let key = e.keyCode; 
    if(availableKeys.indexOf(key) != -1){
        socket.emit('noteRequest', {'payload': {'keyCode': key, 'time': Date.now()}});
    }  
}
