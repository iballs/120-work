function setup() {
  createCanvas ( windowWidth, windowHeight);
  //Variable that creates a canvas based on window dimensions

  background('black');

}

  let taller = 0
  let longer = 0
  var value = 'red'

function draw() {

noStroke();
//white lines running vertical

  fill ('white')
  rect(longer, 1 , 30, taller);


//Black lines running horizontal




//White lines running horizontal

//+2 will make the lines runing horizontal run twice as fast

  taller = taller + 1;
  longer = longer + 60;


//Circle in center of screen will change shape
//Couldn't figure out how to make only 1 circle though
//  fill(value);
  //noStroke();
//  ellipse(windowWidth *.5, windowHeight * .5, mouseX, mouseY);


//When the mouse is clicked the circle will become blue
//function mouseClicked(){
//  if (value === 'red') {
  //    value = 'blue';
  // } else {
  //    value = 'red';
//  }


}
