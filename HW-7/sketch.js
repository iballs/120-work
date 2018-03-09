

let ball = {};
let on = false
ball.width = 40;
ball.x = 10;
ball.y = 10;
ball.delta_x = 1;
ball.delta_y = 1;
ball.scale_x = 1;
ball.scale_y = 1;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255, 255, 0);
}

function draw() {

    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;

    if (ball.x >= width || ball.x <+ 0);
      fill

    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
    }
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
}


    fill(0, 100, 255);
    stroke(0, 255, 255);
    ellipse(ball.x, ball.y, ball.width, ball.width)

    //changed ball to blue

    if ( ball.width >= 100){
        ball.width = -1 * ball.width;
        // ball will shrink if it gets over 100
        //issue: if mouseX is less than 100 ball will conintue to grow
    }
     if (mouseX >= windowWidth/2){
      ball.width = ball.width + 1;
    } else {
      ball.width = ball.width - 1;
    }
    // ball will grow if mouse is on right side
    //ball will shrink if on left side
}

function mousePressed() {

  let red = 255
  let green = 255
  let blue = 0

  background( red, green, blue );
//resets backgroud to yellow...gotta be a better way to do this

    ball.scale_x = map(mouseX, 0, width, mouseX/2, 10);
    ball.scale_y = map(mouseY, 0, height, mouseY/2, 10);


}
