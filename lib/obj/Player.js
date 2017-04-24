/**
 * Created by Tim on 4/23/2017.
 */

function Player(width, height){
    this.x, this.y;
    this.width = width, this.height = height;

    this.CheckCollision = function(ball){
        if((ball.x > this.x && ball.x < (this.x + this.width)) && (ball.y > this.y && ball.y < (this.y + this.height))){
            console.log("Collision");
        }
    }
}