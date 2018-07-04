#!/bin/bash
(cd /home/pi/bladmuziek/server && /usr/bin/pm2 start server.js)
/usr/bin/node /home/pi/bladmuziek/server/bot.js

