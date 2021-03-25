#!/bin/bash
cd /app/eliauren-resume
npm run build
pm2 delete 0
pm2 start "serve -s build" --name "eliauren-resume"
pm2 startup
pm2 save
pm2 restart all
