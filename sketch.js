
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var boy;
var stone;
var tree;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	boy=new Boy(stone.body,{x:200,y:100});
	stone=new Stone(190,600);
	tree=new Tree(700,400,50,100);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  Engine.update(engine);
  boy.display();
  stone.display();
  tree.display();
  drawSprites();
 
}



