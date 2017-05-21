/**
 * Created by Tim on 4/23/2017.
 */

function Ball() {
    this.radius = 10;
    this.vel = {
        x : 5,
        y : 5
    };
    this.pos = {
        x: 100,
        y: 100
    };

    this.Move = function(){
        this.pos.x += this.vel.x;
        this.pos.y += this.vel.y;
    }

    this.CheckPaddleCollision = function(paddle){
        if(paddle.isPlayer && this.pos.x-this.radius <= paddle.pos.x + paddle.width){
            if(this.pos.y > paddle.pos.y && this.pos.y < paddle.pos.y + paddle.height){
                this.vel.x = -this.vel.x;
            }
        }else if(!paddle.isPlayer && this.pos.x+this.radius >= paddle.pos.x){
            if(this.pos.y > paddle.pos.y && this.pos.y < paddle.pos.y + paddle.height){
                this.vel.x = -this.vel.x;
            }
        }
    }

    this.CheckBoundries = function(WIDTH, HEIGHT){
        //CHECK LEFT SIDE
        if(this.pos.x < 0){
            this.BallReset(WIDTH, HEIGHT);
            return {
                Score: true,
                Side: 'LEFT'
            };
        }
        //CHECK RIGHT SIDE
        if(this.pos.x > WIDTH){
            this.BallReset(WIDTH, HEIGHT);
            return {
                Score : true,
                Side : 'RIGHT'
            };
        }
        //CHECK TOP SIDE
        if(this.pos.y-this.radius <= 0){
            this.vel.y = -this.vel.y;
            return {
                Score : false
            };
        }
        //CHECK BOTTOM SIDE
        if(this.pos.y + this.radius >= HEIGHT){
            this.vel.y = -this.vel.y;
            return {
                Score : false
            };
        }

        return {
            Score : false
        };

    }

    this.BallReset = function(WIDTH, HEIGHT){
        this.pos.x = WIDTH/2;
        this.pos.y = HEIGHT/2;
        this.vel.x = -this.vel.x;
    }
}