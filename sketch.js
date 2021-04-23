
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;




var engine,world;

var ground,ball;


function setup() {
  createCanvas(800,400);



  engine = Engine.create();
  world = engine.world;


  //create a ground body
  var options = {
     
      isStatic : true
  }
  ground = Bodies.rectangle(400,380,800,10,options);
 
  
  World.add(world, ground);

  //create a circular body

var ballOptions = {
    restitution : 1.0,

}

ball = Bodies.circle(600,100,20,ballOptions);

World.add(world,ball);

  
}

function draw() {
  background('lavender');  

  Engine.update(engine);

  fill('orange');
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,10);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);

  drawSprites();
}