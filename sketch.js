var paper,box;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {

	createCanvas(1200, 1200);

  engine = Engine.create();
	world = engine.world;

  paper = new Paper(50,300,100,100);
  ground = new Ground(600,1100,1200,20);

  trash = new Trash(900,950);

	Engine.run(engine);
  
}


function draw() {

  background(255);

  paper.display();
  ground.display();

  trash.display();
 
}


function keyPressed(){

  if(keyCode === UP_ARROW){

     Matter.Body.applyForce(paper.body,paper.body.position,{x:500,y:-500});

  }

}