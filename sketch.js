var ball;
var bricks;
var paddle;
var hitSound, brickSound;
var ROWS=4
var COLUMNS=8
var BRICK_WIDTH=80;
var BRICK_HEIGHT=40;
var BRICK_MARGIN=4;
var colors=["red", "blue", "yellow", "green"]

function preload(){
//hitSound = loadSound ("/hit.mp3");
//brickSound = loadSound ("/brick.mp3");
}

function setup(){
    createCanvas(800,600); 

    paddle = createSprite(width/2, height-50, 120, 10); 
    ball = createSprite(width/2, height-200, 20,20);
    ball.shapeColor = "grey"
    
    bricks = new Group(); 

    var offSetX = width/2-(COLUMNS-1)*(BRICK_MARGIN+BRICK_WIDTH)/2
    var offSetY = 80

    for(var r = 0; r<ROWS; r++){
        for(var c = 0; c<COLUMNS; c++){ 
            var brick = createSprite(offSetX+c*(BRICK_WIDTH+BRICK_MARGIN), offSetY+r*(BRICK_HEIGHT+BRICK_MARGIN),BRICK_WIDTH, BRICK_HEIGHT)
            brick.shapeColor = colors[r]
             bricks.add(brick);  
        }      
    }

        

}

function draw(){
   background("black");

   paddle.x = World.mouseX


   drawSprites();
}