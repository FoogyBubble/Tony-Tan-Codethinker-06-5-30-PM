let canvas, ctx;
let CentreX, CentreY;
let BallX, BallY;
let SpeedX, SpeedY //change value of BallX and BallY


let DrawBall = () => {
    ctx.lineWidth = 7;
    ctx.strokeStyle = "rgb(219, 7, 9.2)";
    ctx.fillStyle = "rgb(8, 9, 184)";

    ctx.beginPath();
    ctx.arc(BallX, BallY, 25, 0, 6.284);
    ctx.stroke();
    ctx.fill();
}

let animating = () => {
   if (document.getElementById("playAnimation").checked) {
        //erase everything
        ctx.reset();

        if (BallX < 0 || BallX > canvas.width) {
           SpeedX = -SpeedX;
        }
        if (BallY < 0 || BallY > canvas.height) {
           SpeedY = -SpeedY;
        }

        BallX = BallX + SpeedX;
        BallY = BallY + SpeedY;
        DrawBall();  
   }

   if (document.getElementById("playAnimationX2").checked) {
         //erase everything
         ctx.reset();

         if (BallX < 0 || BallX > canvas.width) {
            2(SpeedX) = -2(SpeedX);
         }
         if (BallY < 0 || BallY > canvas.height) {
            2(SpeedY) = -2(SpeedY);
         }
      
         BallX = BallX + 2(SpeedX);
         BallY = BallY + 2(SpeedY);
         DrawBall();  
   }
   requestAnimationFrame(animating); //call itself again
}

window.onload = () => {
    canvas = document.getElementById("drawingboard");
    ctx = canvas.getContext("2d");
    
    CentreX = canvas.width / 2;
    CentreY = canvas.height / 2;

    BallX = CentreX;
    BallY = CentreY;

    SpeedX = 7;
    SpeedY = 7;

    DrawBall();
    animating();
}