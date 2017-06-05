function setup() { 
  createCanvas(800, 600, P2D);
  frameRate(30);
  snake = new Snake();

} 

function draw() { 
    background(0);
    snake.walk();
    snake.move();
    snake.show();    
    if(snake.selfcolision()){
        console.log("COLIDIU! PERDEU PLAYBOY!");
    }
}

function mousePressed(){
    snake.eat();
}