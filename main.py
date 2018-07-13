import time
import sys

import simpleaudio as sa

from lib.soundManager import SoundManager
from lib.sound import Sound

#audio requirements: wav 16-bit
#sudo call required because of keyboard
sm = SoundManager()
sm.playSoundOnIndex(sys.argv[1], int(sys.argv[2]))



