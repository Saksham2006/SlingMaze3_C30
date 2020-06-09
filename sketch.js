const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Composites = Matter.Composites;

var engine, world;
var ball, slingshot;
var ground,leftWall,rightWall,roof,platform1,platform2;
var box1, box2, box3, box4, box5, box6, box7, box8;
var up1, up2, up3, up4;

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);
    engine = Engine.create();
    world = engine.world;
    ball = new Ball(400,300);
    slingshot = new Slingshot(ball.body,{x: 200,y: 270});
    ground = new Ground(600,570,2000,20);
    leftWall = new Ground(0,displayHeight/2,20,900);
    rightWall = new Ground(displayWidth,displayHeight/2,20,900);
    roof = new Ground(displayWidth/2,0,displayWidth,20);
    platform1 = new Ground(770,400,200,30);
    platform2 = new Ground(180,500,200,120);

    box1 = new Box(600,520);
    box2 = new Box(630,520);
    box3 = new Box(660,520);
    box4 = new Box(690,520);
    box5 = new Box(615,470);
    box6 = new Box(645,470);
    box7 = new Box(675,470);
    box8 = new Box(645,430);

    up1 = new Box(730,320);
    up2 = new Box(760,320);
    up3 = new Box(790,320);
    up4 = new Box(820,320);
}

function draw(){
    background(50);
    Engine.update(engine);
    ball.display();
    slingshot.display();
    ground.display();
    leftWall.display();
    rightWall.display();
    roof.display();
    platform1.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();

    up1.display();
    up2.display();
    up3.display();
    up4.display();

    fill(109,109,242);
    noStroke();
    rect(150,300,10,100);
    rect(250,300,10,100);
    rect(200,350,100,10);
    rect(200,400,10,100);

    platform2.display();

    fill("white");
    text("Press the spacebar to re-attach",100,50);
}

function mouseDragged() {
    Matter.Body.setPosition(ball.body,{x: mouseX,y: mouseY});
}

function mouseReleased() {
    slingshot.fly();
}

function keyPressed() {
    if(keyCode == 32) {
        Matter.Body.setPosition(ball.body,{x: 400,y: 300});
        slingshot.attach(ball.body);
    }
}