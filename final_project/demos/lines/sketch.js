let xPosArr = [0, 60, 120, 180, 240, 300, 360, 420, 480, 540, 600, 660, 720, 780, 840, 900, 960, 1020, 1080, 1140, 1200, 1260, 1320, 1380, 1440, 1500, 1560, 1620, 1680, 1740, 1800]

function setup(){
  createCanvas(windowWidth, windowHeight);
  background('black');
}


  let taller = 0


function draw(){
  vertWhiteLines();

}

function vertWhiteLines(){
  noStroke();
  fill('white');
  for(let idx = 0; idx < xPosArr.length; idx++){
  rect(xPosArr[idx], 0, 30, taller);
}
  taller = taller + 1;
}
