/**
 * Created by Tim on 4/22/2017.
 */
var c, ctx;
var player, ball;
var WIDTH = 1000, HEIGHT = 700;

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
    player = new Player(WIDTH, HEIGHT, "Player");
    console.log(player);
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(player.x, player.y, player.width, player.height);

    ctx.fillRect((WIDTH/2 - ball.width), (HEIGHT/2 - ball.height), ball.width, ball.height);

    setInterval(loop, 17);
};

function loop(){
   Clear();
   ball.Move();
   ball.CheckBoundries(WIDTH, HEIGHT);
   ball.CheckPaddleCollision(player);
   Draw();
};

function Draw(){
    ctx.fillStyle = "#FFFFFF";
    //Draw Player
    ctx.fillRect(player.x, player.y, player.width, player.height);
    //Draw Ball
    ctx.fillRect(ball.x, ball.y, ball.width, ball.height);
};

function Clear(){
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
};