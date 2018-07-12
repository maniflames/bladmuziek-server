import time

import simpleaudio as sa
import keyboard
import websockets

from lib.soundManager import SoundManager
from lib.sound import Sound

#this should be handled in a different class if I want to create sound switch
keys = ['space', 'w', 'a', 's', 'd', 'f', 'g']
notes = ['c', 'a']

#audio requirements: wav 16-bit
#sudo call required because of keyboard
sm = SoundManager()
sm.playSound('system', 'boot')

#listen to keys
while 1:
    pass
    for i, key in enumerate(keys): 
        if keyboard.is_pressed(key):
            sm.playSound('notes', notes[i])


#dependency for lights
#https://github.com/jgarff/rpi_ws281x.git
