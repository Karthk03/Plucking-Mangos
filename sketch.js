
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var stone,mango = [];
var mangoArrPos = 0;
var rope;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	stone = new Stone(100,500,25);

	ground = new Ground(400,650,800,20);

	mango[mangoArrPos] = new Mango(200,300,25);
	mangoArrPos++;

	mango[mangoArrPos] = new Mango(300,200,25);
	mangoArrPos++;

	mango[mangoArrPos] = new Mango(200,200,25);
	mangoArrPos++;

	mango[mangoArrPos] = new Mango(300,300,25);
	mangoArrPos++;

	mango[mangoArrPos] = new Mango(300,200,25);

	rope = new Rope(stone.body,{x: 100, y: 500})


	//Engine.run(engine);
  
}

function draw() 
{
	rectMode(CENTER);
	background("gray");
  
	Engine.update(engine);
  
	for(let i=0;i<= mangoArrPos; i++)
	{
		mango[i].display();
	}
  
	stone.display();
  
	rope.display();	
	
	drawSprites();
   
  }


function mouseDragged()
{
	if(this.rope.chain.bodyA != null)
	{
		Matter.Body.setPosition(stone.body,{x: mouseX, y: mouseY});
	}
}

function mouseReleased()
{
    rope.launch();
}

function keyPressed()
{
    if(keyCode == 32)
    {
        rope.chain.bodyA = stone.body;

        Matter.Body.setPosition(stone.body,{x: 100, y: 200});
        Matter.Body.setAngle(stone.body,0);
    }
}



