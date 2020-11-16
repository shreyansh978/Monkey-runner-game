
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,300);
 monkey = createSprite(100,220,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  ground = createSprite(300,250,1000,10);
  ground.velocityX=-5;
  
  foodGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
   background("white");
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("SurvivalTime: "+survivalTime,250,20);
    ground.x = ground.width /2;
  
   //jump when the space key is pressed
    if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -10;
    }
    
   //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
  
  //stop monkey from falling down
  monkey.collide(ground);
  
 food();
  obstacles();
  
  drawSprites();
}

function food(){
   if(World.frameCount%80===0){
      banana = createSprite(500,300,20,20);
      banana.y = Math.round(random(50,100));
      banana.addImage("banana",bananaImage);
      banana.scale=0.1;
      banana.velocityX=-5;
      banana.lifetime=100;
      foodGroup.add(banana);
   }  
}

function obstacles(){
  if (World.frameCount%200===0){
      obstacle= createSprite(500,225,20,20);
      obstacle.addImage("obstacle",obstacleImage);
      obstacle.scale=0.1;
      obstacle.velocityX=-5;
      obstacle.lifetime=100;
      obstacleGroup.add(obstacle);
      }
}


