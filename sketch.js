const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(250,350,50,50);
    box3 = new Box(300,400,50,50);
    box4 = new Box(350,450,50,50);
    box5 = new Box(400,500,50,50);

    ground = new Ground(200,590,600,20);
}

function draw(){
    background("yellow");
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();  
    ground.display(); 
}