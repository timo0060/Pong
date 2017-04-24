/**
 * Created by Tim on 4/23/2017.
 */

function Ball(WIDTH, HEIGHT){
    this.width = 25, this.height = 25;

    this.x = (WIDTH/2 - this.width), this.y =(HEIGHT/2 - this.height);

    this.speedX = 5, this.speedY = 5;

    this.Move = function(){
        this.x += this.speedX;
        this.y += this.speedY;
    };

    this.CheckBoundries = function(WIDTH, HEIGHT){
       if(this.x < 0 || (this.x + this.width > WIDTH)){
            this.speedX = -this.speedX;
       }
        if(this.y < 0 || (this.y + this.height > HEIGHT)){
            this.speedY = -this.speedY;
        }

    };

    this.CheckPaddleCollision = function(paddle){
        if((this.x <= paddle.x + paddle.width)&&(this.x + this.width >= paddle.x)&&
            (this.y <= paddle.y + paddle.height)&&(this.y + this.height >= paddle.y)){
            this.speedX = -this.speedX;
            console.log("Collision with Paddle: " + paddle.Name);
        }
    };
}