let d = 0

function setup(){
  createCanvas(windowWidth, windowHeight);

}

function draw(){

  background(0);

  let x = mouseX
  let y = mouseY
//tracks the mouse
  noStroke();
  fill(46, 107, 117)
  ellipse(x + 20, y, 20, 20)
  fill(144, 144, 144);
  rect(x, y, 30, 30);
  rect(x, y, 10, 50);
  rect(x + 30, y, 10, 50)
//spaceship
push()

  while(d < windowHeight){
  fill(random(255))
  frameRate(5)
  rect(random(windowWidth),d,10,10)
  d = d + 10
}
//stars that will randomly appear along the x axis and move down
if (d > height){
  d = 0
}

pop()
//keep the stars seprate
if (mouseIsPressed){

while( y > 0 ){
  stroke('gold')
  strokeWeight(2)
  line (x + 35, y, x + 35, y - 20,)
  line (x + 5, y, x +5, y - 20)
  y = y - 40
  //lasers will appear when the mouse is pressed. 
}

}


}
