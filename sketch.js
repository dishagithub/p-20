var car,wall
var weight,speed


function setup() {
  createCanvas(800,400);
    speed=random(55,90)
      weight=random(400,800)
  car= createSprite(50, 400, 50, 50);
  car.velocityX=speed
  wall=createSprite(700,400,50,weight/2);
}

function draw() {
  background(255,255,255);  
  if(wall.x-car.x<wall.width/2+car.width/2){
    car.velocityX=0
    var deformation=0.5*weight*speed*speed/22509
    if(deformation<100){
      car.shapeColor="green"
    }
    if(deformation>100&&deformation<180){
      car.shapeColor="yellow"
    }
    if(deformation>180){
      car.shapeColor="red"
    }
  }
  drawSprites();
}