var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("mycanvas");
var context: CanvasRenderingContext2D = canvas.getContext('2d');

var isanim: boolean = false;
var stpt = new Tank.Point(200,200)
var wtank: Tank.Watertank = new Tank.Watertank(stpt, 200, 150, context);

function start() {
    isanim = true;
    anim();
}
function anim() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    wtank.draw();
    if (isanim) {
        window.requestAnimationFrame(anim);
    }
}