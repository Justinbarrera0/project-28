
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
function preload()

{
boy=loadImage("Plucking mangoes/boy.png")	
}
var ground,tree,stone
var mango1,mango2,mango3
var boy 
var launcher
function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new Ground(650,590,1300,20)
tree=new Tree(1050,340,450,500)
mango1=new Mango(900,160,40)
mango2=new Mango(900,230,40)
mango3=new Mango(950,120,30)
stone=new Stone(235,420,30)
launcher=new Launcher(stone.body,{x:235,y:420})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
tree.display();
mango1.display();
mango2.display();
mango3.display();
image(boy,200,340,200,300)
stone.display();
launcher.display();
  drawSprites();
 
}

function mouseDragged(){

	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){

	launcher.fly()
}