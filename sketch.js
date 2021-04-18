
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine,world;
var Bob0,Bob1;
var x = -200;
var y = 500;
var roof;
function preload()
{
	
}

function setup() {
	createCanvas(1366, 764);
  roof = createSprite(700,104,800,100);
  roof.shapeColor = "black";

	engine = Engine.create();
	world = engine.world;


	Bob0 = new Bob(400,425,50);
  Bob1 = new Bob(500,425,50);
	Bob2 = new Bob(600,425,50);
	Bob3 = new Bob(700,425,50);
  Bob4 = new Bob(800,425,50);
  Bob5 = new Bob(900,425,50);
	Bob6 = new Bob(1000,425,50);

	sling0 = new slingshot(Bob0.body,{x:350,y:150});
  sling1 = new slingshot(Bob1.body,{x:450,y:150});
	sling2 = new slingshot(Bob2.body,{x:550,y:150});
	sling3 = new slingshot(Bob3.body,{x:650,y:150});
  sling4 = new slingshot(Bob4.body,{x:750,y:150});
  sling5 = new slingshot(Bob5.body,{x:850,y:150});
	sling6 = new slingshot(Bob6.body,{x:950,y:150});

  sling0a = new slingshot(Bob0.body,{x:450,y:150});
  sling1a = new slingshot(Bob1.body,{x:550,y:150});
	sling2a = new slingshot(Bob2.body,{x:650,y:150});
	sling3a = new slingshot(Bob3.body,{x:750,y:150});
  sling4a = new slingshot(Bob4.body,{x:850,y:150});
  sling5a = new slingshot(Bob5.body,{x:950,y:150});
	sling6a = new slingshot(Bob6.body,{x:1050,y:150});


	Engine.run(engine);
  console.log(Bob0);
}


function draw() {
  
  rectMode(CENTER);
  background("yellow");
  
  Engine.update(engine);
  sling0.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
  sling6.display();

  sling0a.display();
  sling1a.display();
  sling2a.display();
  sling3a.display();
  sling4a.display();
  sling5a.display();
  sling6a.display();
  
  Bob0.display();
  Bob1.display();
  Bob2.display();
  Bob3.display();
  Bob4.display();
  Bob5.display();
  Bob6.display();

 
if(keyIsDown (38)){
  Bob0.body.position.x = Bob0.body.position.x - 1;
;
}

  console.log(Bob0.body.position.x);
  drawSprites();

}



