var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;
var allPlayers;

var car1,car2,car3,car4,cars;

var distance = 0;

var carimg1,carimg2,carimg3,carimg4,trackimg;

function preload(){
carimg1 = loadImage("images/car1.png");
carimg2 = loadImage("images/car2.png");
carimg3 = loadImage("images/car3.png");
carimg4 = loadImage("images/car4.png");
trackimg = loadImage("images/track.jpg");
}
function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  //background("white");
  if(playerCount===4){
game.update(1);
  }
  if(gameState===1){
game.play();
  }
  if(gameState===2){
  game.end();
  }
}

