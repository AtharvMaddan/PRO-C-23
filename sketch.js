
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var wall,wall1,wall2;
var wallBody,wall1Body,wall2Body
var paper,dustbin

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

	wall = createSprite(350,650,200,20)
	wall.shapeColor = color("red")
	packageSprite=createSprite(width/2, 80, 10,10);

	wall1 = createSprite(260,600,20,100)
	wall1.shapeColor = color("red")


	wall2 = createSprite(450,607,20,100)
	wall2.shapeColor = color("red")
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);
  ground = new Ground(800,670,1600,20)
  paper = new trash(200,450,40)
  dustbin = new Dustbin(500,450,40,50)
}


function draw() {
  rectMode(CENTER);
  background(0);
 ground.display()
 dustbin.display()
 paper.display()
if(keyDown ("UP_ARROW")){
Matter.Body.applyForce(paper.body,paper.Body.position,{x:85,y:-85})
}
 
drawSprites();
 
}



