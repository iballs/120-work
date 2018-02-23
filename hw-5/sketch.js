function setup() {
  createCanvas ( windowWidth, windowHeight);
  //Variable that creates a canvas based on window dimensions

  background('black');

}

  let taller = 0
  let longer = 0
  var value = 'red'

function draw() {

//white lines running vertical

  fill ('white')
  rect(1, 1 , 30, taller);
  rect( 60, 1, 30, taller);
  rect(120, 1, 30, taller);
  rect(180, 1, 30, taller);
  rect(240, 1, 30, taller);
  rect(300, 1, 30, taller);
  rect(360, 1, 30, taller);
  rect(420, 1, 30, taller);
  rect(480, 1, 30, taller);
  rect(540, 1, 30, taller);
  rect(600, 1, 30, taller);
  rect(660, 1, 30, taller);
  rect(720, 1, 30, taller);
  rect(780, 1, 30, taller);
  rect(840, 1, 30, taller);
  rect(900, 1, 30, taller);
  rect(960, 1, 30, taller);
  rect(1020, 1, 30, taller);
  rect(1080, 1, 30, taller);
  rect(1140, 1, 30, taller);
  rect(1200, 1, 30, taller);
  rect(1260, 1, 30, taller);
  rect(1320, 1, 30, taller);
  rect(1380, 1, 30, taller);
  rect(1440, 1, 30, taller);
  rect(1600, 1, 30, taller);

//Black lines running horizontal

  fill('black')
  rect(1, 1, longer, 30);
  rect(1, 60, longer, 30);
  rect(1, 120, longer, 30);
  rect(1, 180, longer, 30);
  rect(1, 240, longer, 30);
  rect(1, 300, longer, 30);
  rect(1, 360, longer, 30);
  rect(1, 420, longer, 30);
  rect(1, 480, longer, 30);
  rect(1, 540, longer, 30);
  rect(1, 600, longer, 30);
  rect(1, 660, longer, 30);
  rect(1, 720, longer, 30);


//White lines running horizontal
  fill('white')
  rect(1, 1, longer, 30);
  rect(1, 60, longer, 30);
  rect(1, 120, longer, 30);
  rect(1, 180, longer, 30);
  rect(1, 240, longer, 30);
  rect(1, 300, longer, 30);
  rect(1, 360, longer, 30);
  rect(1, 420, longer, 30);
  rect(1, 480, longer, 30);
  rect(1, 540, longer, 30);
  rect(1, 600, longer, 30);
  rect(1, 660, longer, 30);
  rect(1, 720, longer, 30);

//+2 will make the lines runing horizontal run twice as fast
  longer = longer + 2;
  taller = taller + 1;

//Circle in center of screen will change shape
//Couldn't figure out how to make only 1 circle though
  fill(value);
  noStroke();
  ellipse(windowWidth *.5, windowHeight * .5, mouseX, mouseY);

}
//When the mouse is clicked the circle will become blue
function mouseClicked(){
  if (value === 'red') {
      value = 'blue';
  } else {
      value = 'red';
  }


}
