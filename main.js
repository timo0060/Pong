/**
 * Created by Tim on 4/22/2017.
 */
var c, ctx;
var player, ai, ball;
var WIDTH = 1000, HEIGHT = 700;
var codes = [];

window.addEventListener('mousemove', this.MovePaddle);

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
    ball.CheckPaddleCollision(player, true);
    ball.CheckPaddleCollision(ai, false);
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

function getMousePos(canvas, e){
    var rect = canvas.getBoundingClientRect();
    return {
       x: e.clientX - rect.left,
       y: e.clientY - rect.top
    };
}

function MovePaddle(e){
    var mousePos = getMousePos(c, e);
    player.y = mousePos.y - (player.height/2);
    player.CheckBoundries();
}