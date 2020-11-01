var Tank;
(function (Tank) {
    class Point {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
    }
    Tank.Point = Point;
    class Watertank {
        constructor(stpt, h, w, context) {
            this.l = 1;
            this.startpt = stpt;
            this.height = h;
            this.width = w;
            this.context = context;
        }
        draw() {
            this.context.beginPath();
            this.context.rect(this.startpt.x, this.startpt.y, this.width, this.height);
            this.context.strokeStyle = "black";
            this.context.stroke();
            this.context.beginPath();
            this.context.rect(this.startpt.x, this.startpt.y + this.height, this.width - 1, this.l);
            this.context.fillStyle = "blue";
            this.context.fill();
            this.update();
        }
        update() {
            this.l--;
            this.check();
        }
        check() {
            if (this.l <= -this.height) {
                this.l = 1;
            }
        }
    }
    Tank.Watertank = Watertank;
})(Tank || (Tank = {}));
//# sourceMappingURL=tank.js.map