/*
Alle rechten voorbehouden aan 4URBAN:

Annelien Rozemuller
Ilona Verhees
Nancy Rijsdijk
Yoeri Reynart

Niets mag zonder toestemming gekopiërd of verkocht worden.
Voor vragen en/ of licenties:
yoeri@bladmuziek.xyz
*/

$(document).ready(playMusic);
const collections = [
    {
        name: 'notes',
        sounds: ['A4.mp3', 'B4.mp3', 'C4.mp3', 'D4.mp3', 'E4.mp3', 'F4.mp3', 'G4.mp3', 'C5.mp3', 'G4.mp3', 'G4.mp3', 'G4.mp3'],
    }, {
        name: 'phone',
        sounds: ['notification.mp3', 'notification2.mp3', 'iphone.mp3', 'samsung.mp3'], 
    },
    {
        name: 'drum',
        sounds: ['clap.wav', 'kick.wav', 'hihat.wav', 'snare.wav'], 
    },
    {
        name: 'iphone',
        sounds: ['lol.mp3', 'lol.mp3', 'lol.mp3', 'lol.mp3', 'lol.mp3', 'lol.mp3', 'lol.mp3', 'lol.mp3', 'lol.mp3', 'lol.mp3', 'lol.mp3'], 
    }
]

let selectedCollection = 0

function playMusic() {
    $(".note").click(showNote);
    $(document).keydown(changeNote);
    $(document).keyup(sameNote);
    document.addEventListener('keydown', keyDownHandlerMakeyMakey);
}

//when clicked change color
function showNote() {
    $(this).toggleClass("selected");
}

//when key is pressed color changes
function changeNote() {
    var e = event.which;
    //console.log("De keycode is " + e);

    if (e == 38) {$(".note:nth-child(1)").toggleClass("selected");} 
    else if (e == 40) { $(".note:nth-child(2)").toggleClass("selected");}
    if (e == 37) { $(".note:nth-child(3)").toggleClass("selected");} 
    else if (e == 39) { $(".note:nth-child(4)").toggleClass("selected");}
    if (e == 32) { $(".note:nth-child(5)").toggleClass("selected");}
    else if (e == 87) { $(".note:nth-child(6)").toggleClass("selected");} 
    if (e == 65) { $(".note:nth-child(7)").toggleClass("selected");}
    else if (e == 83) { $(".note:nth-child(8)").toggleClass("selected");} 
    if (e == 68) { $(".note:nth-child(9)").toggleClass("selected");}
    else if (e == 70) { $(".note:nth-child(10)").toggleClass("selected");} 
    if (e == 71) { $(".note:nth-child(11)").toggleClass("selected");}
    else if (e == 90) { $(".note:nth-child(12)").toggleClass("selected");}
    if (e == 88) { $(".note:nth-child(13)").toggleClass("selected");} 
    else if (e == 67) { $(".note:nth-child(14)").toggleClass("selected");}
    if (e == 86) { $(".note:nth-child(15)").toggleClass("selected");}
    else if (e == 66) { $(".note:nth-child(16)").toggleClass("selected");} 
    if (e == 78) { $(".note:nth-child(17)").toggleClass("selected");}
    else if (e == 77) { $(".note:nth-child(18)").toggleClass("selected");} 
    if (e == 72) { $(".note:nth-child(19)").toggleClass("selected");}
    else if (e == 74) { $(".note:nth-child(20)").toggleClass("selected");} 
    if (e == 75) { $(".note:nth-child(21)").toggleClass("selected");}
    else if (e == 76) { $(".note:nth-child(22)").toggleClass("selected");} 
}

//when key is released color goes back

function sameNote() {
    var e = event.which;
    //console.log("De keycode is " + e);

    if (e == 38) {$(".note:nth-child(1)").toggleClass("selected");} 
    else if (e == 40) { $(".note:nth-child(2)").toggleClass("selected");}
    if (e == 37) { $(".note:nth-child(3)").toggleClass("selected");} 
    else if (e == 39) { $(".note:nth-child(4)").toggleClass("selected");}
    if (e == 32) { $(".note:nth-child(5)").toggleClass("selected");}
    else if (e == 87) { $(".note:nth-child(6)").toggleClass("selected");} 
    if (e == 65) { $(".note:nth-child(7)").toggleClass("selected");}
    else if (e == 83) { $(".note:nth-child(8)").toggleClass("selected");} 
    if (e == 68) { $(".note:nth-child(9)").toggleClass("selected");}
    else if (e == 70) { $(".note:nth-child(10)").toggleClass("selected");} 
    if (e == 71) { $(".note:nth-child(11)").toggleClass("selected");}
    else if (e == 90) { $(".note:nth-child(12)").toggleClass("selected");}
    if (e == 88) { $(".note:nth-child(13)").toggleClass("selected");} 
    else if (e == 67) { $(".note:nth-child(14)").toggleClass("selected");}
    if (e == 86) { $(".note:nth-child(15)").toggleClass("selected");}
    else if (e == 66) { $(".note:nth-child(16)").toggleClass("selected");} 
    if (e == 78) { $(".note:nth-child(17)").toggleClass("selected");}
    else if (e == 77) { $(".note:nth-child(18)").toggleClass("selected");} 
    if (e == 72) { $(".note:nth-child(19)").toggleClass("selected");}
    else if (e == 74) { $(".note:nth-child(20)").toggleClass("selected");} 
    if (e == 75) { $(".note:nth-child(21)").toggleClass("selected");}
    else if (e == 76) { $(".note:nth-child(22)").toggleClass("selected");} 
}

function keyDownHandler(e) {
    //49 = number 1
    const primaryKeys = [49, 40, 37, 39, 32, 87, 65, 83, 68, 70, 71];
    const secondaryKeys = [90, 88, 67, 86, 66, 78, 77, 72, 74, 75, 76];

    if(primaryKeys.indexOf(e.keyCode) != -1) { 
        let index = primaryKeys.indexOf(e.keyCode);
        playTone(collections[selectedCollection].sounds[index]);
    } else if(secondaryKeys.indexOf(e.keyCode) != -1) {
        let index = secondaryKeys.indexOf(e.keyCode); 
        playTone(collections[selectedCollection].sounds[index]); 
    } else if(e.keyCode == 38) {
        //switch on arrow up
        switchSounds()
    }
}

function keyDownHandlerMakeyMakey(e) {
    const keys = ['w', 'a', 's', 'd', 'f', 'g']

    let index = keys.indexOf(e.key)
    if(index > -1){
        playTone(collections[selectedCollection].sounds[index])
    } else if (e.key == ' ') {
        switchSounds()
    }
}

function switchSounds() {
    selectedCollection = selectedCollection + 1
    if(selectedCollection >= collections.length) {
        selectedCollection = 0
    }

    console.log(collections[selectedCollection].name)
}

function playTone(sound) {
    let tone = new Howl({
        src: ['/sounds/' + sound]
    });
      
    tone.play();
}