var ground1, slingshot, polygon, ball;
var block1, block2,block3,block4 ,block5 ,block6 ,block7 ,block8,block9,block10,
block11 ,block12 ,block13 ,block14 ,block15 ,block16 ,block17 ,block18;


const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder, ground2, ground3;


function preload()
{
	polygonImg = loadImage("polygon.png");
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
  world = engine.world;
  
  

	ground1 = new Ground();
	ground2 = new Ground(800,680,500,20);
	
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);
	slingshot = new SlingShot(this.ball,{x:300, y:550});
  
    box1 = new Box(700,600,40,50);
	box2 = new Box(740,600,40,50);
	box3 = new Box(780,600,40,50);
	box4 = new Box(820,600,40,50);
	box5 = new Box(860,600,40,50);
	box6 = new Box(740,560,40,50);
	box7 = new Box(780,560,40,50);
	box8 = new Box(820,560,40,50);
	box9 = new Box(780,510,40,50);
	
	Engine.run(engine);
  
}


function draw() {
  
  background(5);
  rectMode(CENTER);
  ground1.display();
  ground2.display();
 
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  
  imageMode(CENTER);
  image(polygonImg, ball.position.x, ball.position.y, 40,40);
  slingshot.display();
 
}

function mouseDragged(){
    Body.setPosition(this.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed()
{
    if(keyCode===32){
        slingshot.attach(polygon.body);
    }
}