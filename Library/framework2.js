//Namespace Project
var Project;
(function (Project) {
    //Class Point
    class Point {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
    }
    Project.Point = Point;
    //Class Watertank
    class Watertank {
        constructor(stpt, h, w, context, color) {
            this.l = 0;
            this.startpt = stpt;
            this.height = h;
            this.width = w;
            this.context = context;
            this.color = color;
        }
        //Drawing the tank
        draw(limit) {
            this.context.beginPath();
            this.context.rect(this.startpt.x, this.startpt.y, this.width, this.height);
            this.context.lineWidth = 3;
            this.context.strokeStyle = "black";
            this.context.fillStyle = "black";
            this.context.globalAlpha = 1;
            this.context;
            this.limit = limit;
            this.context.stroke();
            this.draw1();
        }
        //Drawing the liquid as per needs
        draw1() {
            this.context.beginPath();
            this.context.rect(this.startpt.x + 1, this.startpt.y + this.height - 1, this.width - 2, -this.limit);
            this.context.lineWidth = 3;
            this.context.font = '10pt Arial';
            this.context.fillText("Tank B", 220, 250);
            this.context.globalAlpha = 0.9;
            this.context.fillText("Tank A", 220, 510);
            this.context.fillStyle = this.color;
            this.context.strokeStyle = "black";
            this.context.fill();
            this.context.stroke();
        }
    }
    Project.Watertank = Watertank;
    //Class NOT to draw NOT Gate
    class NOT {
        constructor(start_x, start_y, context) {
            this.start_x = start_x;
            this.start_y = start_y;
            this.context = context;
        }
        //Drawing the NOT Gate
        draw() {
            //Drawing the triangle
            this.context.beginPath();
            this.context.moveTo(this.start_x, this.start_y);
            this.context.lineTo(this.start_x - 20, this.start_y - 20);
            this.context.lineTo(this.start_x - 20, this.start_y + 20);
            this.context.lineTo(this.start_x, this.start_y);
            this.context.strokeStyle = "black";
            this.context.lineWidth = 2;
            this.context.stroke();
            //Drawing the small circle
            this.context.beginPath();
            this.context.arc(this.start_x, this.start_y, 5, 0, 2 * Math.PI);
            this.context.fillStyle = "grey";
            this.context.globalAlpha = 1;
            this.context.fill();
            this.context.stroke();
        }
    }
    Project.NOT = NOT;
    //Class Square to draw the level indicators
    class Square {
        constructor(stpt, length, context) {
            this.stpt = stpt;
            this.length = length;
            this.context = context;
        }
        //Drawing the square
        draw() {
            this.context.beginPath();
            this.context.rect(this.stpt.x, this.stpt.y, this.length, this.length);
            this.context.strokeStyle = "black";
            this.context.lineWidth = 3;
            this.context.stroke();
        }
    }
    Project.Square = Square;
    //Class Line for drawing lines
    class Line {
        constructor(start_x, start_y, end_x, end_y, context) {
            this.color = "black";
            this.start_x = start_x;
            this.start_y = start_y;
            this.end_x = end_x;
            this.end_y = end_y;
            this.context = context;
        }
        //Drawing the line
        draw() {
            this.context.beginPath();
            this.context.moveTo(this.start_x, this.start_y);
            this.context.lineTo(this.end_x, this.end_y);
            this.context.lineWidth = 2;
            this.context.strokeStyle = this.color;
            this.context.stroke();
        }
    }
    Project.Line = Line;
    //Class Circle 
    class Circle {
        constructor(cenpt, radius, context) {
            this.color = "grey";
            this.cenpt = cenpt;
            this.radius = radius;
            this.context = context;
        }
        //Drawing circle
        draw() {
            this.context.beginPath();
            this.context.arc(this.cenpt.x, this.cenpt.y, this.radius, 0, 2 * Math.PI, false);
            this.context.fillStyle = this.color;
            this.context.strokeStyle = "black";
            this.context.lineWidth = 2;
            this.context.fill();
            this.context.stroke();
        }
    }
    Project.Circle = Circle;
    //Class AND for drawing AND Gate
    class AND {
        constructor(context) {
            this.context = context;
        }
        //Drawing AND Gate
        draw() {
            // Vertical line
            this.context.beginPath();
            this.context.moveTo(556, 424);
            this.context.lineTo(556, 468);
            this.context.lineWidth = 2;
            this.context.strokeStyle = "black";
            this.context.stroke();
            //Upper Horizontal line
            this.context.beginPath();
            this.context.moveTo(556, 468);
            this.context.lineTo(590, 468);
            this.context.lineWidth = 2;
            this.context.strokeStyle = "black";
            this.context.stroke();
            //Lower Horizontal line
            this.context.beginPath();
            this.context.moveTo(556, 424);
            this.context.lineTo(590, 424);
            this.context.lineWidth = 2;
            this.context.strokeStyle = "black";
            this.context.fillStyle = "black";
            this.context.font = '10pt Arial';
            this.context.font = '10pt Arial';
            //Writing Text on Canvas
            this.context.fillText("Level Sensor B", 330, 235);
            this.context.fillText("Full Level", 330, 185);
            this.context.fillText("1/4 Level", 330, 535);
            this.context.fillText("Level Sensor A", 330, 585);
            this.context.fillText("Y=(A.B)'", 700, 498);
            this.context.stroke();
            //Drawing the semicircle in the AND Gate
            this.context.beginPath();
            this.context.rotate(Math.PI / 2); // To rotate the semicircle
            this.context.fillStyle = "wheat";
            this.context.arc(446, -590, 22, 0, Math.PI, true); //Drawing semicircle
            this.context.rotate(3 * Math.PI / 2); // Bringing canvas back to original position
            this.context.globalAlpha = 1;
            this.context.strokeStyle = "black";
            this.context.lineWidth = 2;
            this.context.fill();
            this.context.stroke();
        }
    }
    Project.AND = AND;
    //Class innercircle to draw the rotating circle
    class innercircle {
        constructor(stpt, endpt, context) {
            this.color = "grey";
            this.context = context;
            this._stpt = stpt;
            this._endpt = endpt;
            this._length = this.length;
            this._angle = this.angle;
        }
        // Getting distance between start and end points
        get length() {
            let l = Math.sqrt(Math.pow(this._stpt.x - this._endpt.x, 2) + Math.pow(this._stpt.y - this._endpt.y, 2));
            return (l);
        }
        // Getting Angle using tan inverse
        get angle() {
            let ang = Math.atan2(this._endpt.y - this._stpt.y, this._endpt.x - this._stpt.x) * 180 / Math.PI;
            return (ang);
        }
        //Drawing inner circle
        draw() {
            this.context.beginPath();
            this.context.arc(this._endpt.x, this._endpt.y, 5, 0, Math.PI * 2);
            this.context.fillStyle = this.color;
            this.context.strokeStyle = this.color;
            this.context.lineWidth = 1;
            this.context.globalAlpha = 1;
            this.context.fill();
            this.context.stroke();
        }
        //Rotating the inner circle by changing (rotating) end points
        rotate() {
            this._angle++;
            this._endpt.x = this._stpt.x + this._length * Math.cos(this._angle * Math.PI / 180);
            this._endpt.y = this._stpt.y + this._length * Math.sin(this._angle * Math.PI / 180);
            this.rotatecheck();
        }
        //To set angle to 0, if it exceeds 360
        rotatecheck() {
            if (this._angle >= 360) {
                this._angle = 0;
            }
        }
    }
    Project.innercircle = innercircle;
})(Project || (Project = {}));
//# sourceMappingURL=framework2.js.map
