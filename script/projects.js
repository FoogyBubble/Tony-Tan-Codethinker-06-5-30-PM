let canvas, ctx;
let CentreOfAttention1, CentreOfAttention2;
let BallOfAttention1, BallOfAttention2;
let CentreOfAttention3, CentreOfAttention4; //change value of BallOfAttention1 and BallOfAttention2

window.onload = () => {
    canvas = document.getElementById("drawingboard");
    ctx = canvas.getContext("2d");
    
    CentreOfAttention1 = canvas.width / 2;
    CentreOfAttention2 = canvas.height / 2;

    BallOfAttention1 = CentreOfAttention1;
    BallOfAttention2 = CentreOfAttention2;

    CentreOfAttention3 = 7;
    CentreOfAttention4 = 7;

    DrawBall();
    RefreshAnimation();
}

let DrawBall = () => {
    ctx.lineWidth = 0.7;
    ctx.strokeStyle = "rgb(214, 70, 2)";
    ctx.fillStyle = "rgb(7, 7, 219)"

    ctx.beginPath();
    ctx.arc(80, 80, 25, 0, 6.284)
    ctx.stroke();
    ctx.fill();
}


let RefreshAnimation = () => {
    // erase everything
    // ctx.reset();
    BallOfAttention1 = BallOfAttention1 + CentreOfAttention3;
    BallOfAttention2 = BallOfAttention2 + CentreOfAttention4;
    DrawBall();

    requestAnimationFrame(animating) // call itself again
}