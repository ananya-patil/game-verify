
var PLAY=1;
var END=0;
var FORM=2;
var gameState=FORM;


var ball1,ball1Img;
var bg1;
var background1;
 var obstacle1,ObstaclesGroup,groundBase1;
 var ground1,GroundsGroup;

 var score=0;
 
var form;

function preload(){
 background1=loadImage("background final.jpg");
// ObstaclesGroup=loadImage("coal.JPG");
//ball1Img=loadImage( "player.JPG");


}
function setup() {
  createCanvas(1200,500);
  //engine = Engine.create();
 // world = engine.world;
  //ball = Bodies.circle(50,400,30,30);
   //fill("aqua");
 //World.add(world,ball);
  
  //ball1.shapeColor(black);
  //player = new Player(50,450,30,30);//
  
    
    //console.log(bg1.x);
    
    //ball1.addImage(ball1Img);

    
   

   
    //groundBase1.velocityX=-4;
   
   
    
    //groundbase = new Ground(50,420,200,30);
    /*for(var i=0;i<20;i++){
      ground.push(new Ground(random(40,1160),random(30,470),random(10,100),random(10,30)));
       }*/

  
}

function draw() {
  console.log(gameState);
    if(gameState===FORM){
      form=new Form();
      form.display();
    }
    else if(gameState===PLAY){
      form.hide();
      bg1=createSprite(750,0);
    bg1.addImage(background1);
    bg1.velocityX=-8;
    bg1.velocityY=0;
    bg1.scale=2.5;
    textFont("calibri");
    textSize(50);

    ball1=createSprite(50,350,30,30);
    ball1.shapeColor="aqua"; 
    
    groundBase1=createSprite(50,480,300,30); 
    groundBase1.shapeColor="blue";
    ObstaclesGroup=new Group();
    GroundsGroup=new Group();

      score=score+Math.round(World.frameRate/60);
      groundBase1.visible=false;
      if(bg1.x<600){
        bg1.x=bg1.width/2;
      }
      
     if(keyDown( "space")){
        ball1.velocityX=0;
        ball1.velocityY=-15;
        }
        ball1.velocityY=ball1.velocityY+1;
        ball1.collide(groundBase1);
        ball1.collide(GroundsGroup);

        if(ObstaclesGroup.collide(ball1)){
          ball1.velocityX=0;
          ball1.velocityY=0;
          ObstaclesGroup.velocityY=0;
          ObstaclesGroup.destroyEach();
          gameState=END;
          
      
        }
        SpawnObstacle();
   SpawnGrounds();
    
      }
  

 /* if (keyDown("RIGHT_ARROW")) {
    ball1.velocityX = 4;
    ball1.velocityY = 0;
  }*/

    
  
  else if(gameState===END){
    ObstaclesGroup.setLifetimeEach(-1);
  }
   
 // player.display();//
  //groundbase.display();
  //for(var i=0;i<ground.length;i++){
    //ground[i].display();
 // }
 
  
  

drawSprites();
}
function SpawnObstacle(){
if(frameCount%40===0){
  var obstacle1=createSprite(360,430,60,60);
  obstacle1.x=random(350,1200);
  obstacle1.y=random(0,430);
  obstacle1.velocityX=-7;
ObstaclesGroup.add(obstacle1);


}
}
function SpawnGrounds(){
  if(frameCount%60===0){
    var ground1=createSprite(100,100,100,30);
     ground1.x=random(50,1000);
      ground1.y=random(0,480);
      ground1.velocityX=-6;
      ground1.shapeColor="green";
      GroundsGroup.add(ground1);
  }
}



