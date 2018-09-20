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


//FIXME: create overlap note switch (this should happen for individual notes instead of entire collections)
//TODO: remote collection switch through server sync 


window.addEventListener('load', init)

const collections = [
    {
        name: 'notes',
        sounds: ['A4.mp3', 'B4.mp3', 'C4.mp3', 'D4.mp3', 'E4.mp3', 'F4.mp3', 'G4.mp3', 'C5.mp3', 'G4.mp3', 'G4.mp3', 'G4.mp3'],
        soundOverlap: true,
        locked: [],
    }, {
        name: 'phone',
        sounds: ['whatsapp.mp3', 'mail.mp3', 'alarm.mp3', 'notification.mp3', 'alarm.mp3', 'mail.mp3'],
        soundOverlap: true, 
        locked: [],
    },
    {
        name: 'drum',
        sounds: ['clap.wav', 'kick.wav', 'hihat.wav', 'snare.wav', 'kick.wav', 'hihat.wav'],
        soundOverlap: true, 
        locked: [],
    },
    {
        name: 'weird electronic',
        sounds: ['weird-1.wav', 'weird-2.wav', 'weird-3.wav', 'weird-4.wav', 'weird-5.wav', 'weird-6.wav'],
        soundOverlap: true, 
        locked: [],
    }
]

let selectedCollection = 0
const keys = ['w', 'a', 's', 'd', 'f', 'g']
let collectionsHTML

function init() {
    collectionsHTML = document.getElementById('collections')

    document.addEventListener('keydown', keyDownHandler)
    document.addEventListener('keyup', keyUpHandler)
    collectionsHTML.addEventListener('click', switchCollection)

    renderCollectionButtons()
}

function keyDownHandler(e) {
    let index = keys.indexOf(e.key)
    if(index > -1) {
        playTone(collections[selectedCollection].sounds[index])
        noteElement = document.getElementById(e.key)
        noteElement.classList.add('selected')
    } else if (e.key == ' ') {
        document.getElementById('switch').classList.add('selected')
        switchCollection()
    }
}

function keyUpHandler(e) {
    let index = keys.indexOf(e.key)
    if(index > -1) {
        noteElement = document.getElementById(e.key)
        noteElement.classList.remove('selected')
    } else if (e.key == ' ') {
        document.getElementById('switch').classList.remove('selected')
    }
}

function switchCollection(e) {
    let target = e.target

    if(!target.classList.contains('switch')) {
        return
    }

    let oldBtn = document.querySelector('.switch.selected')
    oldBtn.classList.remove('selected')

    selectedCollection = target.getAttribute('collection-id')
    target.classList.add('selected')
}

function playTone(sound) {
    let tone = new Howl({
        src: ['/sounds/' + sound]
    });

    if(collections[selectedCollection].locked.indexOf(sound) > -1) {
        return
    }

    if(!collections[selectedCollection].soundOverlap) {
        tone.on('end', function() {
            let deleted = collections[selectedCollection].locked.indexOf(sound)
            collections[selectedCollection].locked.splice(deleted)
        });

        collections[selectedCollection].locked.push(sound)
    }

    tone.play();
}

function renderCollectionButtons() {
    for (collection of collections) {
        let btn = document.createElement('div')
        btn.classList.add('switch')
        btn.setAttribute('collection-id', collections.indexOf(collection))
        if(collections.indexOf(collection) == 0){
            btn.classList.add('selected')
        }
        btn.innerHTML = collection.name
        
        collectionsHTML.appendChild(btn)
    }
}