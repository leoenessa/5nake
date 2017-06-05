var gameover;
//var size=20;

function setup() { 
  createCanvas(400, 400, P2D);
  frameRate(30);
  snake = new Snake();
  food = new Food();
  gameover = false;

} 

function draw() { 
    if(!gameover){
      background(0);
      food.generate(snake.getSnakePositions());
      food.show();
      snake.walk();
      snake.move();
      snake.show();    
      if(snake.selfcolision()){
          console.log("COLIDIU! PERDEU PLAYBOY!");
          gameover=true;
      }
      if(snake.colision(food.getPosition())){
        food.eated();
        snake.eat();
      }
    }
    else{
      background(0)
      textSize(32);
      fill(255,255,0);
      text("Game Over\nScore: "+food.getScore(),width/3,height/2);
    } 
}

function mousePressed(){
    gameover = false;
    food.resetScore();
    snake.resetSnake();
}