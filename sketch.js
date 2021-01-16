//namespacing/alias name
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var ground;
var ball;
var myEngine, myWorld;
var box;

function setup() {
  createCanvas(400,400);

  //Create your own engine. Right side follow the syntax as it is.
  myEngine = Engine.create();

  //create your own world. Right side follow the syntax as it is.
  myWorld = myEngine.world;

  var ground_options = {
    isStatic: true
  }
  ground = Bodies.rectangle(200,380,400,20,ground_options);
  World.add(myWorld,ground);

  //make Bodies and add it to your world. Circle and Rectangle
  box = Bodies.rectangle(200,200,50,50);
  World.add(myWorld,box);

  //make circlebody;
  var ball_options = {
    restitution: 1.5
  }
  ball = Bodies.circle(100,200,30,ball_options);
  World.add(myWorld,ball);
 
}

function draw() {
  background("black");  

  Engine.update(myEngine);
  //console.log(box.position.y);

  rectMode(CENTER);
  rect(box.position.x,box.position.y,50,50);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30,30);

  drawSprites();
}