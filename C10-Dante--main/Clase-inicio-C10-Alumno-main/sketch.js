
var trex,trex_running;
var edges;
var ground;
var invisibleGround;
var cloud,cloudimage;
var cloudsGroup;
var obstacle,obstaclesImages1,obstaclesImages2,obstaclesImages3,obstaclesImages4,obstaclesImages5,obstaclesImages6;
var obstaclesGroup ;
var score =0;

function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png")
  groundfachero=loadImage ("ground2.png")
  cloudimage = loadImage("cloud.png")
  obstaclesImages1 = loadImage("obstacle1.png")
  obstaclesImages2 = loadImage("obstacle2.png")
  obstaclesImages3 = loadImage("obstacle3.png")
  obstaclesImages4 = loadImage("obstacle4.png")
  obstaclesImages5 = loadImage("obstacle5.png")
  obstaclesImages6 = loadImage("obstacle6.png")
}

function setup(){
  createCanvas(600,200);
  ground = createSprite(200,180,400,20)
  ground.addImage("ground", groundfachero)
  ground.x = ground.width /2
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  edges =createEdgeSprites();
  trex.scale = 0.5;
  trex.x =50; 
  invisibleGround = createSprite(200,190,400,10)
  invisibleGround.visible = false
  cloudsGroup=new Group()
}

function draw(){
  background(150);
  text("puntacion: " + score,500,50 )
  score = score + Math.round(frameCount/120);
  ground.velocityX = -7
  if(ground.x <0){
    ground.x = ground.width /2
  }

  //console.log(trex.y);
  if(keyDown("space") && trex.y >= 120){
    trex.velocityY=-7
  }
  trex.velocityY= trex.velocityY + 0.5
  trex.collide(invisibleGround);
  spawnClouds()
  spawnObstacles()
  drawSprites()
}

function spawnClouds(){
if(frameCount %60 ===0){
  cloud = createSprite (600,100,40,10);
  cloud.velocityX = -3 
  cloud.addImage(cloudimage)
  cloud.y = Math.round(random(10,150))
  cloud.scale = 0.4
  cloud.lifetime = 210
  cloud.depth = trex.depth;
  trex.depth +=1
  cloudsGroup.add(cloud)
}

}


function spawnObstacles(){
  if(frameCount %60 ===0){
    obstacle = createSprite (600,165,10,40)
    obstacle.velocityX = -3 
    var ran = Math.round(random(1,6))
    switch(ran){
   case 1 : obstacle.addImage(obstaclesImages1);
          break;
   case 2 : obstacle.addImage(obstaclesImages2);
          break;  
   case 3 : obstacle.addImage(obstaclesImages3);
          break;
   case 4 : obstacle.addImage(obstaclesImages4);
          break;
   case 5 : obstacle.addImage(obstaclesImages5);
          break;    
   case 6 : obstacle.addImage(obstaclesImages6);
          break; 
    default:break
    }
     obstacle.scale = 0.5
     obstacle.lifetime = 210
  }  
}
