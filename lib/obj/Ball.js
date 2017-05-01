/**
 * Created by Tim on 4/23/2017.
 */

function Ball(WIDTH, HEIGHT){
    this.width = 25, this.height = 25;

    this.x = (WIDTH/2 - this.width), this.y =(HEIGHT/2 - this.height);
    this.vel = {
      x : 5,
      y : 5
    };
    this.speed = 5;

    this.Move = function(){
        this.x += this.vel.x;
        this.y += this.vel.y;
    };

    this.CheckBoundries = function(WIDTH, HEIGHT){
       if(this.x < 0 || (this.x + this.width > WIDTH)){
            this.vel.x = -this.vel.x;
       }
        if(this.y < 0 || (this.y + this.height > HEIGHT)){
            this.vel.y = -this.vel.y;
        }

    };

    this.CheckPaddleCollision = function(paddle){
        if((this.x <= paddle.x + paddle.width)&&(this.x + this.width >= paddle.x)&&
            (this.y <= paddle.y + paddle.height)&&(this.y + this.height >= paddle.y)){

            this.vel.x = -this.vel.x;

            /*var n = (this.y + this.height - paddle.y)/(paddle.height + this.height);
            var phi = 0.25*Math.PI*(2*n-1);
            this.vel.x = this.speed * Math.cos(phi);
            this.vel.y = this.speed * -Math.sin(phi);*/
        }
    };
}