var iss;
var spacecraft1,spacecraft2,spacecraft3,spacecraft4;
var hasDocked;
var hasDocked=false;

function preload() {
  iss=loadImage("IMAGES/iss.png");
  spacebg=loadImage("IMAGES/spacebg.jpg");
  spacecraft1=loadImage("IMAGES/spacecraft1.png");
  spacecraft2=loadImage("IMAGES/spacecraft2.png");
  spacecraft3=loadImage("IMAGES/spacecraft3.png");
  spacecraft4=loadImage("IMAGES/spacecraft4.png");

}

function setup() {
  createCanvas(800,400);
  background();
  createSprite(400, 200, 50, 50);

  iss = createSprite(330,130);
  iss.addImage(issimg);
  iss.scale=0.25;

  spacecraft1=createSprite(285,240);
  spacecraft1.addImage(spacecraft1);
  spacecraft1.scale= 0.15;
}

function draw() {
  background(255,255,255);  

  if(!hasDocked){
    spacecraft1.x = spacecraft1.x+random(-1,1);

    if(keyDown("UP_ARROW")){
      spacecraft1.y = spacecraft1.y-2;
    }
    if(keyDown("LEFT_ARROW")){
      spacecraft3.addImage(spacecraft3);
    }
    if(keyDown("RIGHT_ARROW")){
      spacecraft2.addImage(spacecraft2);
    }
    if(keyDown("DOWN_ARROW")){
      spacecraft1.addImage(spacecraft1);
    }
  }


  drawSprites();
}