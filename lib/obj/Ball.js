/**
 * Created by Tim on 4/23/2017.
 */

function Ball(){
    this.x, this.y;
    this.width = 25, this.height = 25;
    this.speedX = 10, this.speedY = 10;

    this.move = function(){
        this.x += this.speedX;
        this.y += this.speedY;
    }
}