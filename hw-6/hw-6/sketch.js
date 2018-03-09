function setup() {

    createCanvas( windowWidth, windowHeight );


    let red = floor( random(256) );
    let green = floor( random(256) );
    let blue = floor( random(256) );
    background( red, green, blue );
//Will give me a random background color when loaded
}

function draw() {


  let w = random(1, 800);
  let q = random (50, 100);
  let x = random(width);
  let y = random(height);
  let red = floor( random(256) );
  let green = floor( random(256) );
  let blue = floor( random(256) );
  frameRate(15);
  fill(red, green, blue);
  noStroke();
    ellipse(windowWidth/2, windowHeight/2, w, w);
    ellipse(windowWidth/4, windowHeight/4, w, w)




}
