window.addEventListener('load', init);
var socket = io();
var availableKeys = [32, 37, 38, 39, 40, 87, 65, 83, 68, 70, 71, 90, 88, 67, 86, 66, 78, 77, 72, 74, 75, 76];


function init() {
    document.addEventListener('keydown', function(e){ keyHandler(e) }); 
}

function keyHandler(e) {
    var key = e.keyCode; 
    console.log(key + 'was pressed'); 
    if(availableKeys.indexOf(key) != -1){
        socket.emit('noteRequest', {'payload': {'keyCode': key}});
    }  
}

socket.on('noteRequest', function(data) {
    var reqKey = data.payload.keyCode;
    console.log(reqKey);

    //Got some help from Soren & ml4294 @ https://stackoverflow.com/questions/596481/is-it-possible-to-simulate-key-press-events-programmatically 
    //Browsers can use different methods to execute a keydown so char, key & keyCode have to be defined
    //Apperently the browser has some flux like approach of handling events so you have to dispatch it
    var e = new KeyboardEvent( 'keydown', {  char:String.fromCharCode(reqKey), key:String.fromCharCode(reqKey), keyCode: reqKey } );  
    document.dispatchEvent(e);
}) 
