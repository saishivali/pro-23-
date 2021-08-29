const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas
var computer,computerBase
var playerBase,player





function setup() {
  canvas = createCanvas(windowWidth,windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
computerBase = new ComputerBase(1100,450,180,150)
playerBase = new PlayerBase(300,450,180,150)
player = new Player(300,playerBase.body.position.y-153,50,180)
computer = new Computer(800,computerBase.body.position.y-450,50,180)
 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("red");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   computerBase.display();
   playerBase.display();
   //display Player and computerplayer
   player.display()
   computer.display()
}
