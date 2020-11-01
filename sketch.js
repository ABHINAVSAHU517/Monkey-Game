var PLAY = 1;
var END = 0;
var gameState = PLAY;

var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.X = -4;
  ground.x = ground.width/2;
  
  
  invisibleGround = createSprite(400,350,900,10);
  invisibleGround.visible = false;
  
 SurvivalTime = 0;
  
  bananaGrp = new Group();
  obstacleGrp = new Group();
  
}


function draw() {
  background("white");
  
  
  stroke("yellow")
    fill("black");
    textSize(20);
    text("Survival Time: "+ SurvivalTime, 140,100);
  
  SurvivalTime = SurvivalTime + Math.round(getFrameRate()/60);
  
  if(keyDown("space")&&monkey.y>=314.3) {
    monkey.velocityY = -12;

  }
  
  monkey.velocityY = monkey.velocityY +0.8;
  
  monkey.collide(invisibleGround);
  console.log(monkey.y);
  
  spawnBanana();
  spawnObstacle();
  
  if(bananaGrp.isTouching(monkey)){
    bananaGrp.destroyEach();
  }
    
    if(obstacleGrp.isTouching(monkey)){
      gameState = END;
    }
  
  
  
    
    
    
  
  
  
  
  drawSprites();
}

function spawnBanana(){
  if(frameCount%80 ===0){
var banana = createSprite(400,Math.round(random(220,260)),10,10);
  banana.addImage(bananaImage);
  banana.velocityX = -4;
  banana.scale = 0.08;
  banana.lifetime = 200;
    bananaGrp.add(banana);

}
}

function spawnObstacle(){
if(frameCount%300 ===0){
  var obstacle = createSprite(400,330,10,10);
  obstacle.velocityX = -4;
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.13;
  obstacle.lifetime = 200;
  obstacleGrp.add(obstacle);
  
  
}
}









