let rainbowLines = [];
//empty array to take from
function setup() {
    createCanvas(windowWidth, windowHeight);
    //creates canvas that fills window

    for (let i = 0; i < 10; i++){
      //fills the array with 10 rainbowLines
    rainbowLines[i] = new RainbowLine(windowWidth/2, windowHeight/2, 0, 0, 'white');
    }
    //defines rainbowlines and creates objects from the class RainboowLine
}

function draw() {
    background(0);
    for (let i = 0; i < 10; i++){
    rainbowLines[i].display();
    rainbowLines[i].move();
    }
    //draws lines from the class, pulls them from array
}

class RainbowLine {
    constructor(x, y, endX, endY, color) {
        this.color = color;
        this.size = size;
        this.posX = x;
        this.posY = y;
        this.endX = endX;
        this.endY = endY;
    }
    //parameters are the line postion and color
    display() {
        push();
        stroke(random(255), random(255), random(255));
        strokeWeight(2);
        line(random(windowWidth), this.endY, this.posX, this.posY);
        pop();
        //random colors to pull from along with random line postions that will originate from middle
    }
    move(){
        this.endY = this.endY + 1;
        if(this.endY > windowHeight){
          this.endY = this.endY * -1
          //flips the lines when they reach the bottom
        }
    }

  }
