// Preparació del canvas ----------------------
/* Obté una referència a <canvas>, després crida al mètode getContext()
  per definir un context al el que es pot començar a dibuisar
  (ctx) és un objecte que representa l'àrea de dibuix del 
  <canvas> y permet dibuixar elements 2D al damunt.

  width and height són dreceres a l'ample i alt del canvas  que coincideixen
  amb l'alt i ample del navegador (viewport)
*/

import { Pilota } from './pilota.js';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);


function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}


function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

const pilotes = [];
for (let i = 0; i < 25; i++) {
  const mida = random(10, 20);
  const x = random(mida, width - mida);
  const y = random(mida, height - mida);
  const velX = random(-4, 4) || 1;
  const velY = random(-4, 4) || 1;
  const color = randomRGB();

  pilotes.push(new Pilota(x, y, velX, velY, color, mida));
}

function loop() {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, width, height);

  for (let pilota of pilotes) {
    pilota.dibuixa(ctx);
    pilota.mou(width, height);
    pilota.col·lisions(pilotes);
  }

  requestAnimationFrame(loop);
}

loop();




