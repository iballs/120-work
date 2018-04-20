## Ian Baldessari, MART 111, sec 50

# Hwk 12 review

Like most weeks, I couldn’t manage to make what I wanted, but instead I created a dumbed down version of what I wanted. What was the simplest game I could think of that involved making two objects interact? Well Pong of course! This sounded far easier than it actually turned out to be. The largest problem I faced was getting two different objects to interact. In all of the examples provided as well as in Shiftman’s example, the objects were all being pulled from the same array. I wanted to find out out to make two different objects from two different classes to interact. Luckily someone else in the class was able to figure out how to to this first so after hours of trial and error I was able to study their code and see how they got their sketch to behave.

I wasn’t aware that you could get objects from different classes to interact by referencing a method in another class in a method of the class you were working with. So to get my ball to work with the paddles I had to create a method in BouncingBall that referenced the this.x In my Paddle class. This would’ve been a very helpful piece of information to know from the lesson. If someone else from the class hadn’t been able to figure this out I never would’ve been able to complete my sketch. 

Unfortunately, I didn’t have enough time to play with embedding my classes into separate files this time around, but I certainly will when I have enough time to work. Being able to clean up your code into workable pieces certainly makes it easier to read.

One side note on my code: I couldn’t figure out why the paddles would get slightly off from one another and eventually disappear after a few minutes. They have the same input and are running in a loop, but every time they reached the edge, they would get off placed by a pixel or so. Do you know why this happens?
