/**
 * Created by Tim on 4/30/2017.
 */
function AI(WIDTH, height, y){
    this.width = 15, this.height = height;
    this.x = WIDTH - (10 + this.width), this.y = y;

    this.move = function(ball){
        var desty = ball.y - (this.height - ball.height) * 0.5;
        this.y += (desty - this.y) * 0.1;

        if(this.y <= 3){
            this.y = 3;
        }

        if(this.y + this.height >= this.height*4 - 3){
            this.y = this.height*3 - 3;
        }
    }
}