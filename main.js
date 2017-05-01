/**
 * Created by Tim on 4/22/2017.
 */
var c, ctx;
var player, ai, ball;
var WIDTH = 1000, HEIGHT = 700;
var codes = [];

window.addEventListener('keydown', this.KeyDown, false);
window.addEventListener('keyup', this.KeyUp, false);

window.onload = function(){
    init();
};

function init(){
   c = document.getElementById('canvas');
   ctx = c.getContext('2d');

   //set width and height
    ctx.canvas.width = WIDTH;
    ctx.canvas.height = HEIGHT;

    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    ball = new Ball(WIDTH, HEIGHT);
    player = new Player(HEIGHT);
    ai = new AI(WIDTH, player.height, player.y);
    console.log(player);
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(player.x, player.y, player.width, player.height);

    ctx.fillRect((WIDTH/2 - ball.width), (HEIGHT/2 - ball.height), ball.width, ball.height);

    loop();
}

function loop(){
    requestAnimFrame(loop);
    Clear();
    ball.Move();
    ball.CheckBoundries(WIDTH, HEIGHT);
    ball.CheckPaddleCollision(player);
    ball.CheckPaddleCollision(ai);
    ai.move(ball);
    Draw();
}

function Draw(){
    ctx.fillStyle = "#FFFFFF";
    //Draw Player
    ctx.fillRect(player.x, player.y, player.width, player.height);
    //Draw AI
    ctx.fillRect(ai.x, ai.y, ai.width, ai.height);
    //Draw Ball
    ctx.fillRect(ball.x, ball.y, ball.width, ball.height);
}

function Clear(){
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
}

window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        function( callback ){
            window.setTimeout(callback, 1000 / 60);
        };
})();

function KeyDown(e){
    codes[e.keyCode] = true;
    if(codes[87] || codes[38])
        player.y -= player.speed;

    if(codes[83] || codes[40])
        player.y += player.speed;

    player.CheckBoundries();
}

function KeyUp(e){
    codes[e.keyCode] = false;
}