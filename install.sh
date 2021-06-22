#!/usr/bin/bash

apt-get update
apt-get upgrade
pkg install wget
pkg install ffmpeg
pkg install nodejs
pkg install npm
pkg install tesseract
npm i -g cwebp
npm i -g ytdl
npm i imgbb-uploader
npm i aki-api
npm i node-tesseract-ocr
npm i translation-google
npm i @adiwajshing/baileys
npm i
npm i got
wget -O ~/../usr/share/tessdata/ind.traineddata "https://github.com/tesseract-ocr/tessdata/blob/master/ind.traineddata?raw=true"
npm install

echo "[*] SUKSES KAK SILAHKAN KETIK \"node index.js\" JANGAN LUPA DONASi
