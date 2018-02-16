function setup() {
//background
    createCanvas(600, 800)
    background(0,128,128)
}
//head and ears
function draw() {
  translate(300, 400)
  noStroke()
  fill('rgb(200, 131, 114)')
  ellipse(110, -130, 100, 100, 10,);
  ellipse(-110, -130, 100, 100, 10);

  push()
  fill('rgb(255, 179, 252)')
  ellipse(110, -130, 60, 60)
  ellipse(-110, -130, 60, 60)
  pop()
  ellipse(0, 0, 312, 312);


  //nose
  push()
  fill('rgb(237, 186, 145)')
  ellipse(0, 95, 110, 115)
  pop()


  push();
  fill(1);
  ellipse(0, 60, 100, 50);
  pop();

  //eyes
  push();
  fill(255);
  ellipse(50, -50, 60, 60);
  ellipse(-50, -50, 60, 60);
  pop()

  push()
  fill('rgb(163, 244, 255)');
  ellipse(50, -50, 35, 60);
  ellipse(-50, -50, 35, 60);
  pop()

  push()
  fill(1);
  ellipse(50, -50, 30, 45);
  ellipse(-50, -50, 30, 45);
  pop()

//mouth
  push()
  strokeWeight(4)
  stroke(1);
  line(0, 145, 0, 110)
  noFill()
  arc(0, 113, 70, 70, .785 , 2.356 );
  pop();

//eyebrows
  push()
  rotate(.26)
  fill(1)
  rect(15, -110, 50, 6, 10, 10, 10, 10)
  pop()

  push()
  rotate(-.26)
  fill(1)
  rect(-65, -110, 50, 6, 10, 10, 10, 10)
}
