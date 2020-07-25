var movingRect,fixedRect;
var rect1,rect2;
var o,o1,o2;
function setup() {
  createCanvas(1200,400);

  movingRect= createSprite(200,200,30,100);
  fixedRect = createSprite(150,130,50,100);
  o=createSprite(400,200,30,100);
  o1=createSprite(600,200,40,100);
  o2=createSprite(1100,200,40,100);
  movingRect.shapeColor="yellow";
  fixedRect.shapeColor="green";
  o.shapeColor="green";
  o1.shapeColor="blue";
  o2.shapeColor="pink";

  movingRect.debug= true;
  fixedRect.debug=true;
  o.debug=true;
  o1.debug=true;
  o2.debug=true;

  rect1=createSprite(300,150,30,100);
  rect2=createSprite(590,150,50,100);
  rect1.shapeColor="blue";
  rect2.shapeColor="grey";
  rect1.debug=true;
  rect2.debug=true;
  rect2.velocityX=-4;
  rect1.velocityX=4;

 
}


function draw() {
  background(0);  
  movingRect.y=mouseY;
  movingRect.x=mouseX;
 
  
if(isTouching(movingRect,o1)) {
  movingRect.shapeColor="red";
  o1.shapeColor="red";
} else{
  movingRect.shapeColor="yellow";
  o1.shapeColor="green";
}
  bounceOff(rect1,rect2); 
 drawSprites();
}

