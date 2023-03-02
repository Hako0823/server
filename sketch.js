//Este proceso (que ahorita anda comentado) es para guardar una imagen
let img;
let num1 = 750;

function preload() {
  img = loadImage('assets/fotoUno.png');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
    background(255, 0, 200);
  

  frameRate(15)
  image(img,-100, 0);
  image(img,0, 0);
  tint(100, 0, 40, 126)
  image(img,70, 0);
  tint(100, 0, 23, 126)
  image(img,-70, 0);
    image(img,0, -60);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw(){
  textSize(25)
  fill ( 234, 86, 31);
  textStyle(ITALIC);
  text("Ayuda",random (num1), random(num1));
  fill ( 255, 0, 0 );
   text("Ayuda",random (num1), random(num1));
  fill (  209, 255, 0 );
   text("Ayuda",random (num1), random(num1));
     fill ( 249, 28, 95);
   text("Ayuda",random (num1), random(num1));
  fill ( 232, 19, 232 );
   text("Ayuda",random (num1), random(num1));
 fill (  209, 255, 0 );
   text("Ayuda",random (num1), random(num1));
    textSize (100)
  fill (0)
  text("Ayuda", 250, 500);
 
  if (mouseIsPressed) { 
    num1 = 1;
    
  }else {
    num1 = 750
  }
}



