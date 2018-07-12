import time

import simpleaudio as sa
import keyboard

from lib.soundManager import SoundManager
from lib.sound import Sound
from lib.ledManager import LedManager

#this should be handled in a different class if I want to create sound switch
keys = ['space', 'w', 'a', 's', 'd', 'f', 'g']
notes = ['c', 'a']

#audio requirements: wav 16-bit
#sudo call required because of keyboard
sm = SoundManager()
lm = LedManager()
sm.playSound('system', 'boot')
print('booted')

#listen to keys
while 1:
    pass
    for i, key in enumerate(keys): 
        if keyboard.is_pressed(key):
            print('pressed')
            sm.playSound('notes', notes[i])
            lm.getNextColor()



