let d = 0
var words = ["In", "A", "Galaxy", "Far, Far", "Away..."];
var index = 0;
function mousePressed(){
  index = index + 1

  if (index == 5){
    index = 0
  }
}
//will cycle through text every time the mouse is clicked

function setup(){
  createCanvas(windowWidth, windowHeight);

}

function draw(){

  background(0);

  let posX = mouseX
  let posY = mouseY
//tracks the mouse and gives coordinates to spaceship

  spaceship();
  lotsOfStars();
  fill('yellow');
  textAlign(CENTER);
  textSize(100);
  text(words[index], windowWidth/2, windowHeight/2);

if (mouseIsPressed){

while( posY > 0 ){

  lazers();

  //lasers will appear when the mouse is pressed.
}

}

function spaceship (){
  noStroke();
  fill(46, 107, 117)
  ellipse(posX + 20, posY, 20, 20)
  fill(144, 144, 144);
  rect(posX, posY, 30, 30);
  rect(posX, posY, 10, 50);
  rect(posX + 30, posY, 10, 50)
}
//creates spaceship at mouse

function lotsOfStars (){
  push()
    while(d < windowHeight){
    noStroke();
    fill(random(255))
    frameRate(3)
    star(random(windowWidth),d, 3, 7, 5)
    d = d + 16
  }
  //stars that will randomly appear along the x axis and move down
  if (d > height){
    d = 0
  }
  pop()
}

function lazers (){
  stroke('gold')
  strokeWeight(2)
  line (posX + 35, posY, posX + 35, posY - 20,)
  line (posX + 5, posY, posX +5, posY - 20)
  posY = posY - 40
}

function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
  //copied code that will turn my dots into stars when placeed above
}
}
