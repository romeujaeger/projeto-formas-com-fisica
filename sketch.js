const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


let engine;
let world;
var ball;
var ground;
var wedge;
var angle=60;
var poly;
var quadrado;
var trapezio;

function setup() {
  
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ball_options = {
    restitution : 0.95,
    frictionAir : 0.01
  }

  var quadrado_options = {
    restitution : 1,
    frictionAir : 0.02
  }

  var trapezio_options = {
    restitution : 0.85,
    frictionAir : 0.01
  }

  var ground_options = {
    isStatic : true
  }

  

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  quadrado = Bodies.rectangle(200, 20, 40, 40, quadrado_options);
  World.add(world, quadrado);

  trapezio = Bodies.trapezoid(300, 30, 50, 50, 10, trapezio_options);
  World.add(world, trapezio);

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
 background (51);
 backgroundColor (blue)
 Engine.update(engine);

 ellipse(ball.position.x,ball.position.y,20);
 rect(quadrado.position.x, quadrado.position.y,40, 40);
 rect(trapezio.position.x, trapezio.position.y, 50, 50, 15);
 rect(ground.position.x,ground.position.y,400,20);

}

