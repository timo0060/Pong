/**
 * Created by Tim on 4/22/2017.
 */
var c, ctx;

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

    var ball = new Ball();
    var player = new Player(25, HEIGHT/4);

    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(10, HEIGHT/4 + (player.height/2), player.width, player.height);

    ctx.fillRect((WIDTH/2 - ball.width), (HEIGHT/2 - ball.height), ball.width, ball.height);

    setInterval(loop, 17);
};

function loop(){
   Clear();

   Draw();
};

function Draw(){
    ctx.fillStyle = "#FFFFFF";
    //Draw Player
    ctx.fillRect(10, HEIGHT/4 + (player.height/2), player.width, player.height);
    //Draw Ball
    ctx.fillRect((WIDTH/2 - ball.width), (HEIGHT/2 - ball.height), ball.width, ball.height);
};

function Clear(){
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
};