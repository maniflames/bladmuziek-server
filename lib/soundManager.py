import time 
import simpleaudio as sa
from .sound import Sound

class SoundManager:
    def __init__(self):
        self.collections = {
            'system': [Sound('boot', 'audio/system/ping.wav'), Sound('boot2', 'audio/system/ping.wav')],
            'notes': [Sound('a', 'audio/available-sounds/v1/a.wav'), Sound('c', 'audio/available-sounds/v1/c.wav'), Sound('f', 'audio/available-sounds/v1/f.wav')]
        }

    def playSound(self, collectionName, soundName):
        for sound in self.collections[collectionName]:
            if sound.name == soundName:
                playing = sound.waveObject.play()
                playing.wait_done()
                time.sleep(0.1)
    
    def playSoundOnIndex(self, collectionName, index):
        sounds = self.collections[collectionName]
        sound = sounds[index]
        self.playSound(collectionName, sound.name)