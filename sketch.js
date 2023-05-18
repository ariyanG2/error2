var background1
var obstacle, obstacleGroup
var player
var coins, coinGroup
var restart1, restart1Img
var gameOver, gameOverImg
var gameState='play'
var invisGround
var Score = 0

function preload() {
background1 = loadImage('LabBg.jpeg');
coins = loadImage('coin.png');
restart1img = loadImage('restart_button.png')
gameOverImg = loadImage('gameOver_image.png')

}

function setup(){
  createCanvas(windowWidth, windowHeight);
  
  bgSprite = createSprite(400, 260, width, height)
  bgSprite.addImage('LabBg.jpeg', background1);
  bgSprite.scale = 2.1
 
  

  player=createSprite(50, height - 100, 50, 50);
  player.shapeColor = "red"

  invisGround=createSprite(400, height - 10, width, 10)
  invisGround.visible = false;

  obstacleGroup=new Group();
  coinGroup =new Group();

  restart1=createSprite(width / 2, height / 2);
  restart1.addImage("restart1", restart1Img)
  gameOver=createSprite(width / 2, height / 2 - 100);
  gameOver.addImage("gameOver", gameOverImg)
}

function draw(){
background(background1);
if(gameState==='play'){
 
  if(keyDown("SPACE")&& player.y >= height - 120){
    player.velocityY= -8;
    }
   
    if (bgSprite.x < -1){
      bgSprite.x = bgSprite.width/40.3;
    }
    
    addObstacles();
    coin();
    
    player.velocityY = player.velocityY + 0.2;
    bgSprite.velocityX = -4
    
    for(var i = 0; i < obstacleGroup.length; i++){
      if(obstacleGroup.get(i).isTouching(player)){
      obstacleGroup.get(i).remove();
      }
      
    }
    for(var i = 0; i < coinGroup.length; i++){
      if(coinGroup.get(i).isTouching(player)){
      coinGroup.get(i).remove()
      Score += 5;
      }
    }
    if(obstacleGroup.isTouching(player)){
      gameState= 'end'
    }
}
else if(gameState==='end'){
bgSprite.velocityX = 0
obstacleGroup.setVelocityXEach(0) 
coinGroup.setVelocityXEach(0) 
restart1.visible = true;
gameOver.visible = true;
}







 player.collide(invisGround);
  
 
 

drawSprites();

textSize(25);
fill('red')
text("Score = " + Score, width - 150, 80);
}

function addObstacles(){
  if(frameCount%80===0){
obstacle1=createSprite(width - 50, height - 100, 45, 45);
obstacle1.velocityX = -4 
obstacle1.y=Math.round(random(height - 50, height - 100))
obstacleGroup.add(obstacle1)
}
}

function coin(){
  if(frameCount%300===0){
    coin1=createSprite(width - 50 ,height - 120, 35,35 )
    coin1.velocityX = -4
    coin1.addImage(coins);
    coin1.scale = 0.25
    coinGroup.add(coin1);
  }
}


function Restart(){

}



















