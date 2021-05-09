const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;
var roof;
var bob1,bob2,bob3,bob4,bob5;
var bobdiameter,startX,startY;
var rope1,rope2,rope3,rope4,rope5;



function preload() {

}

function setup(){
    var canvas = createCanvas(1600,700);
    engine = Engine.create();
    world = engine.world;


    roof = new Roof(width/2,height/4,width/7,20);
    bobdiameter = 40;
    startX = width/2;
    startY = height/4+500;
    bob1 = new Bob(startX-bobdiameter*2,startY,bobdiameter);
    bob2 = new Bob(startX-bobdiameter,startY,bobdiameter);
    bob3 = new Bob(startX,startY,bobdiameter);
    bob4 = new Bob(startX+bobdiameter,startY,bobdiameter);
    bob5 = new Bob(startX+bobdiameter*2,startY,bobdiameter);

    rope1 = new Rope(bob1.body,roof.body,-bobdiameter*2,0);
    rope2 = new Rope(bob2.body,roof.body,-bobdiameter,0);
    rope3 = new Rope(bob3.body,roof.body,0,0);
    rope4 = new Rope(bob4.body,roof.body,bobdiameter,0);
    rope5 = new Rope(bob5.body,roof.body,bobdiameter*2,0);


    
    //chain = new Chain(bird.body,log6.body);

}

function draw(){
    background(255);
    Engine.update(engine);



    roof.display();

    rope1.display();
    rope2.display();
    rope3.display();
    rope4.display();
    rope5.display();

    bob1.display();
    bob2.display();
    bob3.display();
    bob4.display();
    bob5.display();



    
    
}

function keyPressed(){
    if (keyCode === UP_ARROW){
        Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-75,y:-67.5})
    }
}
