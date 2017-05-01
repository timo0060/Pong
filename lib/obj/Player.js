/**
 * Created by Tim on 4/23/2017.
 */

function Player(width, height, name){
    this.width = 15, this.height = height/4;
    this.x = 10, this.y = Math.ceil((height/4 + this.height/2));
    this.Name = name;
    this.speed = 15;

    this.CheckBoundries = function(){
        if(this.y <= 3){
            this.y = 3;
        }

        if(this.y + this.height >= this.height*4 - 3){
            this.y = this.height*3 - 3;
        }
    }
}