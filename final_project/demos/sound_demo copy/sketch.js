
var song;
var fft;
var button;

function toggleSong() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}

function preload() {
  song = loadSound('2020.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  angleMode(DEGREES);
  button = createButton('toggle');
  button.mousePressed(toggleSong);
  song.play();
  fft = new p5.FFT(0.9, 128);
}

function draw() {
  background(0);
  var spectrum = fft.analyze();
  //console.log(spectrum);
  //stroke(255);
  noStroke();
  translate(width / 2, height / 2);
  //beginShape();
  for (var i = 0; i < spectrum.length; i++) {
    var angle = map(i, 0, spectrum.length, 0, 1000);
    var amp = spectrum[i];
    var r = map(amp, 20, 256, 20, 600);
    //fill(i, 255, 255);
    var x = r * cos(angle);
    var y = r * sin(angle);
    stroke(i, i, i);
    line(0, 0, x, y);
    //vertex(x, y);
    //var y = map(amp, 0, 256, height, 0);
    //rect(i * w, y, w - 2, height - y);
  }
  //endShape();


}
