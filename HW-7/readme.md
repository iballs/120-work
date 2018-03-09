Ian Baldessari, MART 120, Sec 50

[Live Sketch Link](Your Live Link)


# HW 7 | Describe then Alter the Bouncing Ball

## Description of What the Original Code is Doing


Please describe what the original code is doing.

Why is it working the way it is?
What does each line do?
How can you make the ball change direction?

While the sketch may seem to behave randomly at first, there are some parameters that it follows. Without clicking the mouse the code tells the ball to travel diagonally by 1x1 every frame. When it reaches the edge of the canvas it gets turned around by either the inverse of the y value if it hits the top or bottom or the inverse of the x value if it hits one of the walls. Again, if nothing is clicked it will travel in the opposite direction of the x or y value (depending what side of the canvas it hits first) while maintaining a positive value of the x or y value that hasn't flipped yet.

When you click, you are adjusting the x or y value of the ball based off of the value of where you clicked. If you click at (30, 200) then you are adjusting the 1 x 1 path that the ball would normally take by 30 to the x value and 200 by the y value. This is why the ball also appears to travel 'faster' when you click in the lower right hand side of the screen and 'slower' when you click in the upper left hand side. The greater the x and y values the crazier the ball is going to travel. When the x and y values are closer to zero the ball slows down to a crawl.

On top of all of this the draw function is being called repeatedly, so the ball leave a trail where it has been in the previous frame.

Basically:

  - The ball only 'changes direction' when it hits a wall causing it to flip to an inverse value.
  - The ball 'speeds up' and gets tweaked at an angle because clicking is changing the input to the x and y coordinates of the ball.


## How did you alter the sketch?

  I played around with 'else' 'ifs' for a long time, but basically came to conclusion that I was going to have to keep things simple. I tried to play with the size of the ball based on where the mouse was on the screen. If it was on the right the ball wold grow and if it was on the left it would shrink. The first problem I ran into with this was the ball getting too large or small so I put a parameter on it that would cause it to shrink if ball.width got over 100. The issue with this though was it seemed to also be tied to the if that caused the ball to grow. If mouseX was less than 100 then the growing would always be true so the order of operations would cause the ball to grow past 100 unless the mouse got moved over. I left it in however because it added to the other variables in the sketch.

  The other major change I made to the skecth was clearing the background in the case of mouse pressed.I really wanted to create a switch that flipped the background between yellow and pink, but I couldn't figure out how to clear the background and also flip the color at the same time.

  The one thing I couldn't figure out even if my life depended on it was how to create a second ball that acted independently of the first one...

Please describe how and why you changed the sketch?

  After seeing how the ball acted before and after a click I realized I could create two very different looking pictures out of the one sketch. By using mouseX and mouseY as size variable I was able to paint a picture with the ball that kept changing sizes. By clicking, the mouseX and mouseY created unique patterns that were static and more trippy. After being clicked in certain places the ball no longer traveled, but instead "pulsed."
