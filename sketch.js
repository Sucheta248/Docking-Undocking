var iss, spacecraft;
var hasDocked=false;

var issImg, spaceViewImg;
var spaceCraft1Img, spaceCraft2Img, spaceCraft3Img, spaceCraft4Img;

function preload(){
issImg=loadImage("images/iss.png");
spacebgImg=loadImage("images/spacebg.jpg");
spaceCraft1Img = loadImage("images/spacecraft1.png");
spaceCraft2Img = loadImage("images/spacecraft2.png");
spaceCraft3Img = loadImage("images/spacecraft3.png");
spaceCraft4Img = loadImage("images/spacecraft4.png");
}

function setup() {
  createCanvas(800,400);
  background(spacebgImg);
  iss = createSprite(400, 200, 50, 50);
  iss.addImage(issImg)
  iss.scale=0.5;


  spacecraft = createSprite(400,300,50,50);
  spacecraft.addImage(spaceCraft1Img);
  spacecraft.addImage(spaceCraft2Img);
  spacecraft.addImage(spaceCraft3Img);
  spacecraft.addImage(spaceCraft4Img);
  spacecraft.scale=0.5;
  spacecraft= false;
}

function draw() {
  background(spacebgImg);  

  drawSprites();

  if(!hasDocked){
    var rand = Math.round(random(1,20));

    if(keyDown(LEFT_ARROW)){
      spacecraft=createSprite(350,300,50,50);
      spacecraft.addImage(spaceCraft3Img);
      spacecraft.scale=0.5;   
      spacecraft=true; 
    }

    if(keyDown(RIGHT_ARROW)){
      spacecraft=createSprite(450,300,50,50);
      spacecraft.addImage(spaceCraft4Img);
      spacecraft.scale=0.5;  
      spacecraft=true;   
    }

    if(keyDown(DOWN_ARROW)){
      spacecraft=createSprite(400,300,50,50);
      spacecraft.addImage(spaceCraft2Img);
      spacecraft.scale=0.5; 
      spacecraft=true;    
    }

  }
}