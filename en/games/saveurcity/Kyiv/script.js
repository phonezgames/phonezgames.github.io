/*-----------ONLOAD INITIALIZATION-----------*/
window.onload = function(){
var c = document.querySelector("canvas");
var canvas = document.querySelector("canvas");
c.width = innerWidth;
c.height = innerHeight;
c = c.getContext("2d");
  
/*-----------MOUSE/TOUCH & CONTROLS-----------*/ 
//mouse and touch objects
function startGame(){
var mouse = {
  x: innerWidth/2,
  y: innerHeight-33
};
  
var touch = {
  x: innerWidth/2,
  y: innerHeight-33
};
  
//event listener for mouse object
canvas.addEventListener("mousemove", function(event){
mouse.x = event.clientX;
//mouse.y = event.clientY;
});
//eventListener to mouse object
canvas.addEventListener("touchmove", function(event){
  var rect = canvas.getBoundingClientRect();
  var root = document.documentElement;
  var touch = event.changedTouches[0];
  var touchX = parseInt(touch.clientX);
  var touchY = parseInt(touch.clientY) - rect.top - root.scrollTop;
  event.preventDefault();
  mouse.x = touchX;
  //mouse.y = touchY;
});
  
/*-----------GAME VARIABLES-----------*/  
//player
var _players = [];
var player_width = 32;
var player_height = 32;
var playerImg = new Image();
playerImg.src = "https://phonezgames.xyz/img/misto_kyiv.png";
var score = 0;
var health = 100;

//enemy array
var _enemies = []; //array to hold n enemies
var enemyImg = new Image();
enemyImg.src = "https://i.ibb.co/BqrHW34/virus.png";
var enemy_width = 32;
var enemy_height = 32;
//health array
var _healthkits = []; //array to hold n health kits
var healthkitImg = new Image();
healthkitImg.src = "https://image.ibb.co/iTrjuU/hospital.png";
var healthkit_width = 32;
var healthkit_height = 32;

/*-----------GAME OBJECTS-----------*/  
//Player object
function Player(x, y, width, height){
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  
  this.draw = function(){
    c.beginPath();
    c.drawImage(playerImg, mouse.x-player_width, mouse.y-player_height); //draw player and center cursor
  };
  
  this.update = function(){
    this.draw();
  };
}


//Enemy object
function Enemy(x, y, width, height, speed){
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.speed = speed;
  
  this.draw = function(){
    c.beginPath();
    c.drawImage(enemyImg, this.x, this.y);
  };
  
  this.update = function(){
    this.y += this.speed;
    this.draw();
  };
}

//Health kit object  
function Healthkit(x, y, width, height, speed){
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.speed = speed;
  
  this.draw = function(){
    c.beginPath();
    c.drawImage(healthkitImg, this.x, this.y);
  };
  
  this.update = function(){
    this.y += this.speed;
    this.draw();
  };
}
  
/*-----------_new OBJECT-----------*/  
//draw Player
for (var _ = 0; _<1; _++){  
  var __player = new Player(mouse.x, mouse.y, player_width, player_height);
  _players.push(__player);
}

//draw n enemies into enemies array
function drawEnemies(){
  for (var _ = 0; _<2; _++){ //enemy with random x axis, -32 as y axis, enemy_width, enemy_height, random speed  
    var x = Math.random()*(innerWidth-enemy_width);
    var y = -enemy_height; //-height to draw above canvas for smooth income
    var width = enemy_width;
    var height = enemy_height;
    var speed = Math.random()*4;
    var __enemy = new Enemy(x, y, width, height, speed);
    _enemies.push(__enemy); //push enemy to my array of enemies
  }
}setInterval(drawEnemies, 1234);

  
//draw health kits
function drawHealthkits(){
  for (var _ = 0; _<1; _++){ //enemy with random x axis, -32 as y axis, enemy_width, enemy_height, random speed  
    var x = Math.random()*(innerWidth-enemy_width);
    var y = -enemy_height; //-height to draw above canvas for smooth income
    var width = enemy_width;
    var height = enemy_height;
    var speed = Math.random()*2.6;
    var __healthkit = new Healthkit(x, y, width, height, speed);
    _healthkits.push(__healthkit); //push enemy to my array of enemies
  }
}setInterval(drawHealthkits, 15000);
  
/*-----------COLLISION DETECTION-----------*/
function collision(a,b){
  return a.x < b.x + b.width &&
         a.x + a.width > b.x &&
         a.y < b.y + b.height &&
         a.y + a.height > b.y;
}
function collision2(a,b){
  return mouse.x-a.width/2 < b.x + b.width &&
         mouse.x + a.width/2 > b.x &&
         mouse.y < b.y + b.height*1.8 &&
         mouse.y + a.height*1.8 > b.y;
}
/*-----------SCORE-----------*/
c.fillStyle = "white";
c.font = "1em Arial";

/*-----------DIRTY ERROR HANDLING-----------*/
function stoperror() {
  return true;
}  
window.onerror = stoperror;
  
/*-----------GAME LOOP-----------*/
function animate(){
  requestAnimationFrame(animate); //animate
  c.beginPath(); //begin
  c.clearRect(0,0,innerWidth,innerHeight); //clear canvas
  c.fillText("Захист: " + health, 5, 20); //health
  c.fillText("Бали: " + score, innerWidth-100, 20); //score
  
/*-----------__player, __bullet, __enemy update, __healthkit update-----------*/
  //update _player
  for (var i=0; i < _players.length; i++){
    _players[i].update();
  }
  
  //update enemies from enemies array
  function drawEnemy(){
  for (var k=0; k < _enemies.length; k++){
    _enemies[k].update();

    //if enemy is below canvas, delete it
    if(_enemies[k].y > innerHeight){
      score++;
      _enemies.splice(k, 1);
      
   }
  }
 }drawEnemy();
  
  //draw healthkits
  for(var h=0; h < _healthkits.length; h++){
    _healthkits[h].update();
  }
  
  
  //COLLISIONS
  function handleCollision(){
    for(var i = _players.length-1; i >= 0; i--){
      for(var k = _enemies.length-1; k >= 0; k--){
        if(collision2(_players[i], _enemies[k])){
          //_players.splice(i, 1);
          _enemies.splice(k, 1);
          health -= 10;
          if(health === 0){
            alert("Ваше місто пало :с " +score);
            startGame();
          }
        }
      }
    }
  }handleCollision();
  
  
    function handleCollision2(){
    for(var i = _players.length-1; i >= 0; i--){
      for(var k = _healthkits.length-1; k >= 0; k--){
        if(collision2(_players[i], _healthkits[k])){
          //_players.splice(i, 1);
          _healthkits.splice(k, 1);
          health += 10;
          if(health === 0){
            alert("Ваше місто пало :с");
            startGame();
          }
        }
      }
    }
  }handleCollision2();

} //animate func
animate();
}startGame();//startGame function starts/restarts game
}; //end of onload func