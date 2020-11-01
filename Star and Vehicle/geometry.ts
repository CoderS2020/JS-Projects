
namespace Geometry {
    export class Point {
        public x: number;
        public y: number;
        constructor(x?: number, y?: number) {
            this.x = x;
            this.y = y;
        }
    }

    export class Closepath {
        public x: number;
        public y: number;
        public point: Point[];
        public context: CanvasRenderingContext2D;
        public color;
        constructor(context: CanvasRenderingContext2D, arraypoint: Point[]) {
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
    export class Ellipse extends Closepath {
        //public x: number;
        //public y: number;
        public a: number;
        public b: number;
        constructor(context: CanvasRenderingContext2D, x: number, y: number, majorx: number, minory: number) {
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
        protected calculate() {
            this.point = [];
            for (var i = 0; i <= 360; i++) {
                let x1 = this.a * Math.cos(i * Math.PI / 180) + this.x;
                let y1 = this.b * Math.sin(i * Math.PI / 180) + this.y;
                this.point.push(new Geometry.Point(x1, y1));
            }
        }
    }

    export class Cirlcle extends Ellipse {
        constructor(context: CanvasRenderingContext2D, x: number, y: number, radius: number) {
            super(context, x, y, radius, radius);

        }

    }

    export class polygon extends Closepath {
        public n: number;
        public l: number;
        //public x;
        //public y;
        constructor(context: CanvasRenderingContext2D, n: number, x: number, y: number) {
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
        protected calculate(x: number, y: number) {
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

    // add your code here -----------------------------------------------------------------------------------------------------//
    //Class Rectangle as a Child Class of Closepath
    export class Rectangle extends Closepath {
        constructor(context: CanvasRenderingContext2D, x: number, y: number) {
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
        protected calculate(x: number, y: number) {
            this.point = [];
            this.point.push(new Point(x, y));
            this.point.push(new Point(x + 300, y));
            this.point.push(new Point(x + 300, y + 100));
            this.point.push(new Point(x, y + 100));
            this.point.push(new Point(x, y));

        }
    }
    //Class Rightangledtraingle as a Child Class of Closepath
    export class Rightangledtriangle extends Closepath {
        constructor(context: CanvasRenderingContext2D, x: number, y: number) {
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
        protected calculate(x: number, y: number) {
            this.point = [];
            this.point.push(new Point(x, y));
            this.point.push(new Point(x, y + 100));
            this.point.push(new Point(x + 200, y + 100));
            this.point.push(new Point(x, y));

        }
    }

    //Pentagon as a child class of Closepath
    export class requiredpentagon extends Closepath {
        constructor(context: CanvasRenderingContext2D, x: number, y: number) {
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
        protected calculate(x: number, y: number) {
            this.point = [];
            this.point.push(new Point(x, y));
            this.point.push(new Point(x-100, y + 70));
            this.point.push(new Point(x -50, y + 140));
            this.point.push(new Point(x +50, y + 140));
            this.point.push(new Point(x + 100, y + 70));
            this.point.push(new Point(x, y));

        }
    }

    //Star as a child class of Closepath
    export class Star extends Closepath {
        constructor(context: CanvasRenderingContext2D, x: number, y: number) {
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
        protected calculate(x: number, y: number) {
            this.point = [];
            this.point.push(new Point(x, y));
            this.point.push(new Point(x-100, y + 300));
            this.point.push(new Point(x +150, y + 100));
            this.point.push(new Point(x -150, y + 100));
            this.point.push(new Point(x + 110, y + 300));
            this.point.push(new Point(x, y));

        }
    }

    // ------------------------------------------------------------------------------------------------------------------------//

    export class ClosePathproperty {
        public cx;
        public cy;
        public area;
        public point: Point[];
        constructor(geometry: Closepath) {
            this.point = geometry.point;
        }

        private centriod() {
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

        public getcentriod(): Point {
            this.centriod();
            return (new Point(this.cx, this.cy));
        }

        public getarea(): number {
            this.centriod();
            return (this.area);
        }

        gettrianglearea(pt1: Point, pt2: Point, pt3: Point): number {
            var area = (pt1.x * (pt2.y - pt3.y) + pt2.x * (pt3.y - pt1.y) + pt3.x * (pt1.y - pt2.y)) / 2;
            return (Math.abs(area));
        }
        isinside(point: Point): boolean {
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

    export class Scene {
        public canvas: HTMLCanvasElement;
        constructor(canvas: HTMLCanvasElement) {
            this.canvas = canvas;

        }
        add(geometry: Geometry.Closepath) {
            container.push({ geometry: geometry });
            this.draw();
        }
        private draw() {
            var context: CanvasRenderingContext2D = this.canvas.getContext("2d");
            context.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < container.length; i++) {
                container[i].geometry.draw();
            }
        }
    }

}
var container: { geometry: Geometry.Closepath }[] = [];


// containers
//              holdFluid();
// bathing bucket, glass                    , bottle
// water           coke, cold drink, lassi  , holdFluid(); => openCap, super.holdFluid(), closeCap,