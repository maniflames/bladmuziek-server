import time
import sys
from neopixel import*

#dependency for lights
#https://github.com/jgarff/rpi_ws281x.git
class LedManager:

    def __init__(self):
        #define constants needed to configure the NoePixel object
        LED_COUNT      = 12 #180
        LED_PIN        = 18
        LED_FREQ_HZ    = 800000
        LED_DMA        = 10
        LED_BRIGHTNESS = 150
        LED_INVERT     = False
        LED_CHANNEL    = 0
        # Create NeoPixel object with appropriate configuration.
        self.strip = Adafruit_NeoPixel(LED_COUNT, LED_PIN, LED_FREQ_HZ, LED_DMA, LED_INVERT, LED_BRIGHTNESS, LED_CHANNEL)
        # Intialize the library (must be called once before other functions).
        self.strip.begin()

        #color format GRB
        #BM-blue BM-orange BM-Purple BM-green BM-pink
        self.colors = [Color(186, 90, 233), Color(170, 250, 82), Color(98, 129, 170), Color(175, 71, 96), Color(109, 237, 141)]

        #set the current color index 
        self.currentColorI = -1

    def colorWipe(self, strip, color, wait_ms=60000):
        """Wipe color across display a pixel at a time."""
        for i in range(strip.numPixels()):
            self.strip.setPixelColor(i,color)
            self.strip.show()
            time.sleep(0.1)

    def getNextColor(self):
        nextColorI = self.currentColorI + 1
        
        if int(nextColorI) < len(self.colors) - 1:
            self.colors[nextColorI]
            self.currentColorI = nextColorI
        else:
            self.colors[0]
            self.currentColorI = 0
            
        self.colorWipe(self.strip, self.colors[self.currentColorI])
        
    def lightLoop(self):
        try:
            while True:
                self.getNextColor()
                time.sleep(1)

        except KeyboardInterrupt:
            self.colorWipe(self.strip, Color(0,0,0), 10)
        

# Uncommend to use the leds as standalone program
# Main program logic follows:
if __name__ == '__main__':
    lm = LedManager()
    lm.currentColorI = int(sys.argv[1])
    lm.getNextColor()


