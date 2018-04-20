let speed = 2
let speed2 = 7

function setup() {
  createCanvas(windowWidth, windowHeight);
paddle1 = new Paddles(60, 0, 10, 360);
paddle2 = new Paddles(windowWidth - 60, 0, 10, 360);
ball = new BouncingBall(0, windowHeight/2, 10, 10);
}

function draw () {
  background(1);

  paddle1.show();
  paddle1.move();
  paddle2.show();
  paddle2.move();
  ball.move();
  ball.show();
  ball.paddleCheck();

}

class BouncingBall {
  constructor(x2, y2, w2, h2,){
    this.x2 = x2;
    this.y2 = y2;
    this.w2 = w2;
    this.h2 = h2;
  }

  move(){
    this.x2 = this.x2 + speed2;
    this.y2 = this.y2;
    if(this.x2 > windowWidth){
      this.x2 = 0;
    }
    if(this.x2 < 0){
      this.x2 = 0;
    }
  }

  show(){
    noStroke();
    fill(255);
    rect(this.x2, this.y2, this.w2, this.h2);
  }
  paddleCheck(){
    if(this.x2 >= paddle2.x){
      speed2 = -10;
    }
    if(this.x2 <= paddle1.x){
      speed2 = 10;
    }
  }

}

class Paddles {
  constructor(x, y, w, h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  move() {
    this.x = this.x;
    this.y = this.y + speed;
    if(this.y > windowHeight - 360){
      speed = -2;
    }
    if(this.y < 0){
      speed = 2;
    }
  }

  show() {
    push();
    noStroke();
    fill(255);
    rect(this.x, this.y, this.w, this.h);
    pop();
  }


}
