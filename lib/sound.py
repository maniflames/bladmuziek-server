import simpleaudio as sa

class Sound:
    def __init__(self, name, path):
        self.name = name
        self.path = path
        self.waveObject = sa.WaveObject.from_wave_file(path)
