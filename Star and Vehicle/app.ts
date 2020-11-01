var canvas = <HTMLCanvasElement>document.getElementById("mycanvas");
var context: CanvasRenderingContext2D = canvas.getContext("2d");

let t1: HTMLInputElement = <HTMLInputElement> document.getElementById('t1');
let t2: HTMLInputElement = <HTMLInputElement> document.getElementById('t2');

var circle: Geometry.Cirlcle;
var rectangle : Geometry.polygon;
var hexagon: Geometry.polygon;
var ellipse: Geometry.Ellipse;
var pentagon: Geometry.polygon;

var scene = new Geometry.Scene(canvas);

function circleAdd()
{
    circle = new Geometry.Cirlcle(context, +t1.value, +t2.value, 25);
    circle.color = "green";
    scene.add(circle);
}

function squareAdd()
{
    circle = new Geometry.Cirlcle(context, +t1.value, +t2.value, 25);
    circle.color = "green";
}

function ellipseAdd()
{
    ellipse = new Geometry.Ellipse(context, +t1.value, +t2.value, 50, 30);
    scene.add(ellipse);
}

function rectangleAdd()
{
    rectangle = new Geometry.polygon(context, 4, +t1.value, +t2.value);
    rectangle.color = "pink";
    scene.add(rectangle);
    var s = new Geometry.ClosePathproperty(rectangle);
    console.log(s.isinside(new Geometry.Point(401,401)));
}

function hexagonAdd()
{
    hexagon = new Geometry.polygon(context, 6, +t1.value, +t2.value);
    hexagon.color = "red";
    scene.add(hexagon);
}

function pentagonAdd()
{
    pentagon = new Geometry.polygon(context, 5, +t1.value, +t2.value);
    scene.add(pentagon);
}
 //----------------------------------------------Code Added Here---------------------------------------------------------------------

 //Declaring Variables
var rectangle1:Geometry.Rectangle;
var righttri:Geometry.Rightangledtriangle;
var reqpenta:Geometry.requiredpentagon;
var star:Geometry.Star;

//Drawing Geometrical Figures
function drawgeometry(){
    //Rectangle    
    rectangle1 = new Geometry.Rectangle(context,300,400);
    rectangle1.color = "red";
    scene.add(rectangle1);
    
    //Circle
    circle = new Geometry.Cirlcle(context, 810,500, 80);
    circle.color = "green";
    scene.add(circle);

    //Right angled triangle
    righttri= new Geometry.Rightangledtriangle(context,602,400);
    righttri.color = "violet";
    scene.add(righttri);

    //Required Pentagon
    reqpenta= new Geometry.requiredpentagon(context,350,258);
    reqpenta.color = "blue";
    scene.add(reqpenta);
       
}
  
//Drawing Star
function drawstar(){
     
    //Drawing Star 
    star= new Geometry.Star(context,500,700);
    star.color = "pink";
    scene.add(star);

    
}
//----------------------------------------------Code Added Here---------------------------------------------------------------------