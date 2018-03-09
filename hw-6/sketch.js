function setup() {

    createCanvas( windowWidth, windowHeight );


    let red = floor( random(256) );
    let green = floor( random(256) );
    let blue = floor( random(256) );
    background( red, green, blue );
//Will give me a random background color when loaded
}

function draw() {


  let w = random(1, 50);
  let q = random (50, 100);
  let x = random(width);
  let y = random(height);
  let red = floor( random(256) );
  let green = floor( random(256) );
  let blue = floor( random(256) );
  frameRate(10);
  fill(red, green, blue);
  noStroke();
    ellipse(x, y, w, w);
//random colored ellipse at 10fps drawn randomly


var leftWall = 100
var rightWall = windowWidth - 100
constrain(leftWall, rightWall)
fill(red, green, blue);
ellipse(mouseX, mouseY, q, q )




}
