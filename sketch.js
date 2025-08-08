var d;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(153, 102, 153);
  // texto x de instrucciones y desactiva el código sin tener que borrarlo 
  frameRate(100);
}

function draw() {
  d = random(10,100);
  noStroke();
  fill(255,d);
 ellipse(mouseX,mouseY,d,d);
}
