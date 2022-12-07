var ball;
var paddle;
var score;
var playingArea;

var aWidth;
var aHeight;
var pWidth;
var pHeight;
var dx = 2;
var dy = 2;
var pdx = 48;
var currentScore = 0;
var timer;
var paddleLeft = 228;
var ballLeft = 100;
var ballTop = 8;

window.addEventListener('load', init);
window.addEventListener('resize', init);

function init() {
    // store dom objects in local variables whenever possible. getElementById is a very expensive call to make and can slow app down a lot
    ball = document.getElementById('ball');
    paddle = document.getElementById('paddle');
    score = document.getElementById('score');
    playingArea = document.getElementById('playingArea');
    document.addEventListener('keydown', keyListener, false)
    layoutPage();
}

function layoutPage() {
    aWidth = innerWidth;
    aHeight = innerHeight;
    pWidth = aWidth - 22;
    pHeight = aHeight -22;
    playingArea.style.width = pWidth + 'px';
    playingArea.style.height = pHeight + 'px';
}

function keyListener(e) {
    // var to hold keycode
    var key = e.keyCode
    // left arrow key and a key? basically allowing user to navigate game with keyboard and choose between right and left hand
    if((key == 37 || key == 65) && paddleLeft > 0) {
        paddleLeft -= pdx;
        if(paddleLeft < 0) {
            paddleLeft = 0;
        }
    }
    // right arrow and w, moving paddle to right edge of screen instead of left now
     else if((key == 39 || key == 68) && paddleLeft < pWidth - 64) {
        paddleLeft -= pdx;
        if(paddleLeft < 0) {
            paddleLeft = 0;
        }

    }
    paddle.style.left = paddleLeft + 'px';
}