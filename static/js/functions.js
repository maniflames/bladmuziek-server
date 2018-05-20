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
    playNote();
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

//TODO: Refactor to choose note
//TODO: Refactor to switch statement 
//TODO: Add seperate function for playing the actual notes
//TODO: Use audio API or library so if the same note is pressed twice it can stop the old note and start the new one or play two in parallell

function playNote(){
$(document).keydown(function(e){
    if (e.keyCode == 38) { 
        document.getElementById('up').play();
        return false;
    } else if (e.keyCode == 40) { 
        document.getElementById('down').play();
        return false;
    } else if (e.keyCode == 37) { 
        document.getElementById('left').play();
        return false;
    } else if (e.keyCode == 39) { 
        document.getElementById('right').play();
        return false;
    } else if (e.keyCode == 32) { 
        document.getElementById('space').play();
        return false;
    } else if (e.keyCode == 87) { 
        document.getElementById('w').play();
        return false;
    } else if (e.keyCode == 65) { 
        document.getElementById('a').play();
        return false;
    } else if (e.keyCode == 83) { 
        document.getElementById('s').play();
        return false;
    } else if (e.keyCode == 68) { 
        document.getElementById('d').play();
        return false;
    } else if (e.keyCode == 70) { 
        document.getElementById('f').play();
        return false;
    } else if (e.keyCode == 71) { 
        document.getElementById('g').play();
        return false;
    } else if (e.keyCode == 90) { 
        document.getElementById('z').play();
        return false;
    } else if (e.keyCode == 88) { 
        document.getElementById('x').play();
        return false;
    } else if (e.keyCode == 67) { 
        document.getElementById('c').play();
        return false;
    } else if (e.keyCode == 86) { 
        document.getElementById('v').play();
        return false;
    }  else if (e.keyCode == 66) { 
        document.getElementById('b').play();
        return false;
    } else if (e.keyCode == 78) { 
        document.getElementById('n').play();
        return false;
    } else if (e.keyCode == 77) { 
        document.getElementById('m').play();
        return false;
    } else if (e.keyCode == 72) { 
        document.getElementById('h').play();
        return false;
    }  else if (e.keyCode == 74) { 
        document.getElementById('j').play();
        return false;
    } else if (e.keyCode == 75) { 
        document.getElementById('k').play();
        return false;
    } else if (e.keyCode == 76) { 
        document.getElementById('l').play();
        return false;
    }
});
}