/**
 * Created by Tim on 5/21/2017.
 */

function DrawRect(cx, posX, posY, width, height, colour){
    cx.fillStyle = colour;
    cx.fillRect(posX, posY, width, height);
}

function DrawCircle(cx, centerX, centerY, radius, colour){
    cx.fillStyle = colour;
    cx.beginPath();
    cx.arc(centerX, centerY, radius, 0, Math.PI *2, true);
    cx.fill();
}

function DrawText(cx, posX, posY, text, colour, font){
    cx.fillStyle = colour;
    cx.font = font;
    cx.fillText(text, posX, posY);
}