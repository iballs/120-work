
var song;
var fft;
var button;
var ampVol;
let taller = 0
let taller2 = 0
let longer = 0
let longer2 = 0
let xPosArr = [0, 60, 120, 180, 240, 300, 360, 420, 480, 540, 600, 660, 720, 780, 840, 900, 960, 1020, 1080, 1140, 1200, 1260, 1320, 1380, 1440, 1500, 1560, 1620, 1680, 1740, 1800]
var volhistory = [];


function preload() {
  song = loadSound('2020.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(RGB);
  angleMode(DEGREES);
  button = createButton('play');
  button.mousePressed(togglePlaying);
  //song.play();
  fft = new p5.FFT(.9, 256);
  ampVol = new p5.Amplitude();
}

function draw() {

  background(0);

  //whitelines
  if (song.currentTime() > 10.87){
  noStroke();
  fill('white');
  for(let idx = 0; idx < xPosArr.length; idx++){
rect(xPosArr[idx], 0, 30, taller);
}
taller = taller + .75
}

//black box
  fill('black')
if(song.currentTime() > 28.38){
  rect(0, 0, longer, windowHeight);
  longer = longer + 2.25;
}

  //white horizontal lines
if(song.currentTime() > 37.06){
  noStroke();
  fill('white');
  for(let idx = 0; idx < xPosArr.length; idx++){
  rect(0, xPosArr[idx], longer2, 30);
  }
  longer2 = longer2 + 1.5
  }

if(song.currentTime() > 54.48){
  rect(0, 0, windowWidth, taller2);
  taller2 = taller2 + 1.75;
}



  volFrqGraph();


}

function volFrqGraph(){
  var spectrum = fft.analyze();
  var vol = ampVol.getLevel();
  volhistory.push(vol);
  stroke('red');
  noFill();
 translate(width / 2, height / 2);
//radial graph that is tied to vol/amp of song
 beginShape();
 for (var p = 0; p < 360; p++) {
   var r = map(volhistory[p], 0, 1, 10, windowWidth * 1.3);
   var xr = r * cos(p);
   var yr = r * sin(p);
   vertex(xr, yr);
 }
 endShape();

 if (volhistory.length > 360) {
   volhistory.splice(0, 1);
 }


//star thingy, tied to the frq of the song

  //console.log(spectrum);
  //stroke(255);
  noStroke();
  //translate(width / 2, height / 2);
  //beginShape();
  for (var i = 0; i < spectrum.length; i++) {
    var angle = map(i, 0, spectrum.length, 0, 3600);
    var amp = spectrum[i];
    var r = map(amp, 0, 150, 20, 300);
    //fill(i, 255, 255);
    var x = r * cos(angle);
    var y = r * sin(angle);
    stroke(i, 0, 0);
    line(0, 0, x, y);
    //vertex(x, y);
    //var y = map(amp, 0, 256, height, 0);
    //rect(i * w, y, w - 2, height - y);
  }
  //endShape();
}

//play button to begin song

function togglePlaying() {
  if (!song.isPlaying()) {
    song.play();
    song.setVolume(0.7);
    button.html("pause");
  } else {
    song.stop();
    button.html("play");
  }
}

function loaded() {
  console.log("loaded");
}
