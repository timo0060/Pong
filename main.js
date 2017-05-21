/**
 * Created by Tim on 4/22/2017.
 */

var c;
var cx;

const WIDTH = 800;
const HEIGHT = 600;

var ball = new Ball();
var player = new Paddle(12, 100, true);
var ai = new Paddle(12, 100, false);

var score = {
    player : 0,
    ai : 0
};

function CalcMousePos(e){
    var rect = c.getBoundingClientRect();
    var root = document.documentElement;
    var mouseX = e.clientX - rect.left - root.scrollLeft;
    var mouseY = e.clientY - rect.top - root.scrollTop;

    return {
        x : mouseX,
        y : mouseY
    };
}

window.onload = function(){
    c = document.getElementById('canvas');
    c.width = WIDTH;
    c.height = HEIGHT;

    cx = c.getContext('2d');
    ClearScreen();

    var fps = 60;
    setInterval(Loop, 1000/fps);

    canvas.addEventListener('mousemove',
        function(evt){
            var mousePos = CalcMousePos(evt);
            player.pos.y = mousePos.y - (player.height/2);
        })
}


function Loop(){
    ai.SelfMovement(ball);
    ball.CheckPaddleCollision(player);
    ball.CheckPaddleCollision(ai);
    var collsionResult = ball.CheckBoundries(WIDTH, HEIGHT);
    if(collsionResult.Score){
        if(collsionResult.Side === 'LEFT')
            score.ai ++;
        else
            score.player ++;
    }
    ball.Move();
    Draw();
}

function Draw(){
    //CLEAR SCREEN AND DRAW BACKGROUND
    ClearScreen();

    //DRAW PLAYER
    DrawRect(cx, player.pos.x, player.pos.y, player.width, player.height, 'white');

    //DRAW AI PADDLE
    DrawRect(cx, ai.pos.x, ai.pos.y, ai.width, ai.height, 'white');

    //DRAW BALL
    DrawCircle(cx, ball.pos.x, ball.pos.y, ball.radius, 'white');

}

function ClearScreen(){
    DrawRect(cx, 0, 0, WIDTH, HEIGHT, 'black');

    //Draw Score
    DrawText(cx, WIDTH/3, 50, score.player, 'white', '20px Times New Roman');
    DrawText(cx, WIDTH*0.66, 50, score.ai, 'white', '20px Times New Roman');
}