const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bg;
var sc=0;
function preload(){
time() ;
}
function setup() {
  createCanvas(1272,700);
  engine = Engine.create();
  world = engine.world;
  breaker= new Breaker(200,800,45);
  sling= new Sling(breaker.body,{x:200,y:450})
  ground= new Ground(800,500,500,30);
  box1= new Box(800,470,40,40)
  box2= new Box(760,470,40,40)
  box3= new Box(720,470,40,40)
  box4= new Box(680,470,40,40)
  box5= new Box(640,470,40,40)
  box6= new Box(600,470,40,40)
  box7= new Box(840,470,40,40)
  box8= new Box(880,470,40,40)
  box9= new Box(920,470,40,40)
  box10= new Box(960,470,40,40)
  box11= new Box(1000,470,40,40)
  box12= new Box(960,470,40,40)
  box13= new Box(920,470,40,40)
  box14= new Box(880,470,40,40)
  box15= new Box(840,470,40,40)
  box16= new Box(800,470,40,40)
  box17= new Box(760,470,40,40)
  box18= new Box(720,470,40,40)
  box19= new Box(680,470,40,40)
  box20= new Box(640,470,40,40)
  box21= new Box(680,470,40,40)
  box22= new Box(720,470,40,40)
  box23= new Box(760,470,40,40)
  box24= new Box(800,470,40,40)
  box25= new Box(840,470,40,40)
  box26= new Box(880,470,40,40)
  box27= new Box(920,470,40,40)
  box28= new Box(720,470,40,40)
  box29= new Box(760,470,40,40)
  box30= new Box(800,470,40,40)
  box31= new Box(840,470,40,40)
  box32= new Box(880,470,40,40)
  box33= new Box(840,470,40,40)
  box34= new Box(800,470,40,40)
  box35= new Box(760,470,40,40)
  box36= new Box(800,470,40,40)
}

function draw() {
  if(bg){
    background(bg);
}else{
    background("black");
} 
  Engine.update(engine);
  breaker.display();
  sling.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();
  box31.display();
  box32.display();
  box33.display();
  box34.display();
  box35.display();
  box36.display();
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score(); 
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  box17.score();
  box18.score();
  box19.score();
  box20.score();
  box21.score();
  box22.score();
  box23.score();
  box24.score();
  box25.score();
  box26.score();
  box27.score();
  box28.score();
  box29.score();
  box30.score();
  box31.score();
  box32.score();
  box33.score();
  box34.score();
  box35.score();
  box36.score();


  drawSprites();
}

function mouseDragged() {
  breaker.body.position.x=mouseX
  breaker.body.position.y=mouseY
}

function mouseReleased() {
  sling.freedom()
}

async function time(){
  var dt=await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var json=await dt.json()
  var api=json.datetime.slice(11,13)
  if (api<=17&&api>=6){
      bg=loadImage("images/pbg.jpg")
      
  }else{
      bg=loadImage("images/pbgn.jpg")
  }
}
