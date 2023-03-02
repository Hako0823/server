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
  background (0);
  textSize (20);
  fill ( random(185), random(255), random(100) )
  textStyle(ITALIC)
  
  text("I cant see",random (windowWidth), random(windowHeight))
  text("I cant see",random (windowWidth), random(windowHeight))
  text("I cant see",random (windowWidth), random(windowHeight))
  text("I cant see",random (windowWidth), random(windowHeight))
  text("I cant see",random (windowWidth), random(windowHeight))
  text("I cant see",random (windowWidth), random(windowHeight))
  text("I cant see",random (windowWidth), random(windowHeight))
  text("I cant see",random (windowWidth), random(windowHeight))
  text("I cant see",random (windowWidth), random(windowHeight))
  text("I cant see",random (windowWidth), random(windowHeight))
  text("I cant see",random (windowWidth), random(windowHeight))
  text("I cant see",random (windowWidth), random(windowHeight))
  text("I cant see",random (windowWidth), random(windowHeight))
  text("I cant see",random (windowWidth), random(windowHeight))
  text("I cant see",random (windowWidth), random(windowHeight))
  text("I cant see",random (windowWidth), random(windowHeight))
 
  text("I cant not hear",random (windowWidth), random(windowHeight))
  text("I cant not hear",random (windowWidth), random(windowHeight))
  text("I cant not hear",random (windowWidth), random(windowHeight))
  text("I cant not hear",random (windowWidth), random(windowHeight))
  text("I cant not hear",random (windowWidth), random(windowHeight))
  text("I cant not hear",random (windowWidth), random(windowHeight))
  text("I cant not hear",random (windowWidth), random(windowHeight))
  text("I cant not hear",random (windowWidth), random(windowHeight))
  text("I cant not hear",random (windowWidth), random(windowHeight))
  text("I cant not hear",random (windowWidth), random(windowHeight))
  text("I cant not hear",random (windowWidth), random(windowHeight))
  text("I cant not hear",random (windowWidth), random(windowHeight))
  text("I cant not hear",random (windowWidth), random(windowHeight))
  text("I cant not hear",random (windowWidth), random(windowHeight))
  text("I cant not hear",random (windowWidth), random(windowHeight))
  text("I cant not hear",random (windowWidth), random(windowHeight))
     
    textSize (80)
  fill (255)
  text("Help", 700, 450)
  
 
  
}