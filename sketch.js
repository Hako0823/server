
let num1 = 750;

function setup() {
  createCanvas(windowWidth, windowHeight);
 
 }
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw(){
  background(6);
  textSize(25)
  fill ( 234, 86, 31);
  textStyle(ITALIC);
   fill ( random(255), random(255),random(255))
  
  text("Help",random (num1), random(num1));

   text("Aiuto",random (num1), random(num1));

   text("помогать",random (num1), random(num1));
  
   text("Hilfe",random (num1), random(num1));
  
   text("Aide",random (num1), random(num1));

   text("Ayuda",random (num1), random(num1));
    
  textSize (100)
     fill (255)
  text("Estoy Bien", 100, 400);
  
 
  if (mouseIsPressed) { 
    num1 = 750;
    
  }else {
    num1 = 750
  }
}
