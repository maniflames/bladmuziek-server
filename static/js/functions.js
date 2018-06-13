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

function playMusic() {
    $(".note").click(showNote);
    $(document).keydown(changeNote);
    $(document).keyup(sameNote);
    document.addEventListener('keydown', keyDownHandler);
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
    console.log('handling keydown')
    const sounds = ['a.mp3', 'b-sharp-h.mp3', 'b-sharp-l.mp3', 'c-maj-7.mp3', 'c.mp3', 'g.mp3', 'e-sharp.mp3', 'f-sharp-+.mp3', 'f-sharp.mp3', 'f.mp3', 'g.mp3'];
    const primaryKeys = [38, 40, 37, 39, 32, 87, 65, 83, 68, 70, 71];
    const secondaryKeys = [90, 88, 67, 86, 66, 78, 77, 72, 74, 75, 76];

    if(primaryKeys.indexOf(e.keyCode) != -1) { 
        let index = primaryKeys.indexOf(e.keyCode);
        playTone(sounds[index]);
    } else if(secondaryKeys.indexOf(e.keyCode) != -1) {
        let index = secondaryKeys.indexOf(e.keyCode); 
        playTone(sounds[index]); 
    } 
}

function playTone(sound) {
    let tone = new Howl({
        src: ['/sounds/' + sound]
    });
      
    tone.play();
}