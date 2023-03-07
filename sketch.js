
let num1 = 750;
var cnv;
posX = 40
posY = 50
function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}
function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  centerCanvas();
  background(0)
}
function windowResized() {
 centerCanvas();
}

function draw(){
  background(6);
  textSize(25)
  fill ( 234, 86, 31);
  textStyle(ITALIC);
   fill ( random(255), random(255),random(255))
  
  text("Help",random (windowWidth), random(windowHeight));

   text("Aiuto",random (windowWidth), random(windowHeight));

   text("помогать",random (windowWidth), random(windowHeight));
  
   text("Hilfe",random (windowWidth), random(windowHeight));
  
   text("Aide",random (windowWidth), random(windowHeight));

   text("Ayuda",random (windowWidth), random(windowHeight));
    
  textSize (100)
     fill (255)
  text("Estoy Bien", windowWidth, windowHeight);
  
 
  if (mouseIsPressed) { 
    num1 = 750;
    
  }else {
    num1 = 750
  }
}
