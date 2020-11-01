var Geometry;
(function (Geometry) {
    class Point {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
    }
    Geometry.Point = Point;
    class Closepath {
        constructor(context, arraypoint) {
            this.point = arraypoint;
            this.context = context;
            this.color = "blue";
        }
        draw() {
            var i;
            this.context.beginPath();
            this.context.moveTo(this.point[0].x, this.point[0].y);
            for (i = 1; i < this.point.length; i++) {
                this.context.lineTo(this.point[i].x, this.point[i].y);
            }
            this.context.closePath();
            this.context.fillStyle = this.color;
            this.context.fill();
            this.context.strokeStyle = "black";
            this.context.lineWidth = 3;
            this.context.stroke();
        }
    }
    Geometry.Closepath = Closepath;
    class Ellipse extends Closepath {
        constructor(context, x, y, majorx, minory) {
            super(context, []);
            this.x = x;
            this.y = y;
            this.a = majorx;
            this.b = minory;
            //this.calculate();
        }
        draw() {
            this.calculate();
            super.draw();
        }
        calculate() {
            this.point = [];
            for (var i = 0; i <= 360; i++) {
                let x1 = this.a * Math.cos(i * Math.PI / 180) + this.x;
                let y1 = this.b * Math.sin(i * Math.PI / 180) + this.y;
                this.point.push(new Geometry.Point(x1, y1));
            }
        }
    }
    Geometry.Ellipse = Ellipse;
    class Cirlcle extends Ellipse {
        constructor(context, x, y, radius) {
            super(context, x, y, radius, radius);
        }
    }
    Geometry.Cirlcle = Cirlcle;
    class polygon extends Closepath {
        //public x;
        //public y;
        constructor(context, n, x, y) {
            super(context, []);
            this.l = 100;
            this.n = n;
            this.x = x;
            this.y = y;
            //this.calculate(x, y);
        }
        draw() {
            this.calculate(this.x, this.y);
            super.draw();
        }
        calculate(x, y) {
            this.point = [];
            //this.point.push(new Point(x, y));
            var ang = 360 / this.n;
            var ang1 = 0;
            for (var i = 0; i <= this.n; i++) {
                var x1 = x + this.l * Math.cos(ang1 * Math.PI / 180);
                var y1 = y + this.l * Math.sin(ang1 * Math.PI / 180);
                this.point.push(new Point(x1, y1));
                ang1 += ang;
            }
        }
    }
    Geometry.polygon = polygon;
    // add your code here -----------------------------------------------------------------------------------------------------//
    //Class Rectangle as a Child Class of Closepath
    class Rectangle extends Closepath {
        constructor(context, x, y) {
            super(context, []);
            this.x = x;
            this.y = y;
        }
        //Drawing Rectangle
        draw() {
            this.calculate(this.x, this.y);
            super.draw();
        }
        //Adding co-ordinates of rectangle
        calculate(x, y) {
            this.point = [];
            this.point.push(new Point(x, y));
            this.point.push(new Point(x + 300, y));
            this.point.push(new Point(x + 300, y + 100));
            this.point.push(new Point(x, y + 100));
            this.point.push(new Point(x, y));
        }
    }
    Geometry.Rectangle = Rectangle;
    //Class Rightangledtraingle as a Child Class of Closepath
    class Rightangledtriangle extends Closepath {
        constructor(context, x, y) {
            super(context, []);
            this.x = x;
            this.y = y;
        }
        //Drawing rightangledtriangle
        draw() {
            this.calculate(this.x, this.y);
            super.draw();
        }
        //Adding co-ordinates of right angled triangle
        calculate(x, y) {
            this.point = [];
            this.point.push(new Point(x, y));
            this.point.push(new Point(x, y + 100));
            this.point.push(new Point(x + 200, y + 100));
            this.point.push(new Point(x, y));
        }
    }
    Geometry.Rightangledtriangle = Rightangledtriangle;
    //Pentagon as a child class of Closepath
    class requiredpentagon extends Closepath {
        constructor(context, x, y) {
            super(context, []);
            this.x = x;
            this.y = y;
        }
        //Drawing required pentagon
        draw() {
            this.calculate(this.x, this.y);
            super.draw();
        }
        //Co-ordinates of required pentagon
        calculate(x, y) {
            this.point = [];
            this.point.push(new Point(x, y));
            this.point.push(new Point(x - 100, y + 70));
            this.point.push(new Point(x - 50, y + 140));
            this.point.push(new Point(x + 50, y + 140));
            this.point.push(new Point(x + 100, y + 70));
            this.point.push(new Point(x, y));
        }
    }
    Geometry.requiredpentagon = requiredpentagon;
    //Star as a child class of Closepath
    class Star extends Closepath {
        constructor(context, x, y) {
            super(context, []);
            this.x = x;
            this.y = y;
        }
        //Drawing star
        draw() {
            this.calculate(this.x, this.y);
            super.draw();
        }
        //Co-ordinates of Star
        calculate(x, y) {
            this.point = [];
            this.point.push(new Point(x, y));
            this.point.push(new Point(x - 100, y + 300));
            this.point.push(new Point(x + 150, y + 100));
            this.point.push(new Point(x - 150, y + 100));
            this.point.push(new Point(x + 110, y + 300));
            this.point.push(new Point(x, y));
        }
    }
    Geometry.Star = Star;
    // ------------------------------------------------------------------------------------------------------------------------//
    class ClosePathproperty {
        constructor(geometry) {
            this.point = geometry.point;
        }
        centriod() {
            var i = 0;
            var area = 0;
            var cx = 0;
            var cy = 0;
            var a = 0;
            for (i = 0; i < this.point.length - 1; i++) {
                a = this.point[i].x * this.point[i + 1].y - this.point[i + 1].x * this.point[i].y;
                cx += (this.point[i].x + this.point[i + 1].x) * a;
                cy += (this.point[i].y + this.point[i + 1].y) * a;
                area += a;
            }
            this.area = area / 2;
            this.cx = cx / (6 * area / 2);
            this.cy = cy / (6 * area / 2);
        }
        getcentriod() {
            this.centriod();
            return (new Point(this.cx, this.cy));
        }
        getarea() {
            this.centriod();
            return (this.area);
        }
        gettrianglearea(pt1, pt2, pt3) {
            var area = (pt1.x * (pt2.y - pt3.y) + pt2.x * (pt3.y - pt1.y) + pt3.x * (pt1.y - pt2.y)) / 2;
            return (Math.abs(area));
        }
        isinside(point) {
            var tarea = 0;
            for (var i = 0; i < this.point.length - 1; i++) {
                tarea += this.gettrianglearea(point, this.point[i], this.point[i + 1]);
            }
            this.centriod();
            console.log("tarea=" + tarea + "area=" + this.area);
            if (Math.abs(tarea - this.area) < 0.000001) {
                return (true);
            }
            return (false);
        }
    }
    Geometry.ClosePathproperty = ClosePathproperty;
    class Scene {
        constructor(canvas) {
            this.canvas = canvas;
        }
        add(geometry) {
            container.push({ geometry: geometry });
            this.draw();
        }
        draw() {
            var context = this.canvas.getContext("2d");
            context.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < container.length; i++) {
                container[i].geometry.draw();
            }
        }
    }
    Geometry.Scene = Scene;
})(Geometry || (Geometry = {}));
var container = [];
// containers
//              holdFluid();
// bathing bucket, glass                    , bottle
// water           coke, cold drink, lassi  , holdFluid(); => openCap, super.holdFluid(), closeCap,
//# sourceMappingURL=geometry.js.map