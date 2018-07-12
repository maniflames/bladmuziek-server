#!/bin/bash
(cd /home/pi/bladmuziek/server && /usr/bin/pm2 start server.js)
/usr/bin/chromium-browser http://localhost:8080/?bladmode=base

