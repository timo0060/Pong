/**
 * Created by Tim on 4/23/2017.
 */

function Paddle(width, height, isPlayer){
    this.width = width, this.height = height;
    this.isPlayer = isPlayer;
    this.speed = 5;
    if(isPlayer){
        this.pos = {
            x : 5,
            y : 250
        };
    }else{
        this.pos = {
            x : 783,
            y : 250
        };
    }

    this.SelfMovement = function(ball){
        var paddleCenter = this.pos.y + this.height/2;

        if(ball.pos.y < paddleCenter - 40)
            this.pos.y -= this.speed;
        if(ball.pos.y > paddleCenter + 40)
            this.pos.y += this.speed;
    }
}