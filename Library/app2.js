//initialise canvas and context
var canvas = document.getElementById("mycanvas");
var context = canvas.getContext('2d');
//Drawing the two tanks
var wtank1 = new Project.Watertank(new Project.Point(170, 190), 150, 150, context, "blue");
wtank1.draw(0);
var wtank2 = new Project.Watertank(new Project.Point(170, 440), 150, 150, context, "violet");
wtank2.draw(0);
// Drawing the level indicators for both tanks
var sq1 = new Project.Square(new Project.Point(320, 200), 15, context);
sq1.draw();
var sq2 = new Project.Square(new Project.Point(320, 550), 15, context);
sq2.draw();
//Lines emerging from first tank starting with line1
var line1part1 = new Project.Line(335, 207, 435, 207, context);
line1part1.draw();
var line1part2 = new Project.Line(456, 207, 506, 207, context);
line1part2.color = "greenyellow";
line1part2.draw();
var line1part3 = new Project.Line(506, 207, 506, 437, context);
line1part3.color = "greenyellow";
line1part3.draw();
var line1part4 = new Project.Line(506, 437, 556, 437, context);
line1part4.color = "greenyellow";
line1part4.draw();
//Lines emerging from second tank starting with line2
var line2part1 = new Project.Line(335, 557, 435, 557, context);
line2part1.draw();
var line2part2 = new Project.Line(435, 557, 435, 457, context);
line2part2.draw();
var line2part3 = new Project.Line(435, 457, 556, 457, context);
line2part3.draw();
//NOT GATE
var not = new Project.NOT(456, 207, context);
not.draw();
//AND GATE
var and = new Project.AND(context);
and.draw();
//Drawing the circle
var circle = new Project.Circle(new Project.Point(686, 447), 20, context);
circle.draw();
//Line connecting AND GATE and Circle
var line3 = new Project.Line(611, 447, 666, 447, context);
line3.draw();
// Declaring variable l1 to draw innercircle
var l1 = new Project.innercircle(new Project.Point(686, 447), new Project.Point(695, 457), context);
//Sliders 1 and 2 accessing the sliders on HTML Page
var slider1 = document.getElementById("slider1");
var slider2 = document.getElementById("slider2");
var i; // Variable i for circlerotate() function
// Mouse Event Listeners for both sliders
slider1.addEventListener("mousedown", mousedown, false);
slider1.addEventListener("mouseup", mouseup, false);
slider1.addEventListener("mousemove", mousemove, false);
slider2.addEventListener("mousedown", mousedown, false);
slider2.addEventListener("mouseup", mouseup, false);
slider2.addEventListener("mousemove", mousemove, false);
var drag = false; // To check if drag is true or false for mouse event listening
var isanim = false; // To check if animation is active or not
//Function Mousedown
function mousedown() {
    slider1check();
    finalcheck();
    check();
    drag = true;
}
//Function Mouseup 
function mouseup() {
    start();
    slider1check();
    slider2check();
    check();
    finalcheck();
    drag = false;
}
//Function Mousemove
function mousemove(e) {
    if (drag) {
        start();
        slider1check();
        slider2check();
        finalcheck();
    }
}
//Function start() to call anim() and setting isanim as true
function start() {
    isanim = true;
    anim();
}
//Function anim() to fill the tank with liquid as per requirements
function anim() {
    context.clearRect(170, 190, 150, 500);
    wtank1.draw(+slider1.value - 2);
    wtank2.draw(+slider2.value - 2);
    isanim = false;
}
//Function to change color of lines if liquid rises to upper tank's full level
function slider1check() {
    if (+slider1.value > 138 || i > 138) {
        line1part1.color = "greenyellow";
        line1part2.color = "black";
        line1part3.color = "black";
        line1part4.color = "black";
        line1part1.draw();
        line1part2.draw();
        line1part3.draw();
        line1part4.draw();
    }
    else {
        line1part1.color = "black";
        line1part4.color = "greenyellow";
        line1part2.color = "greenyellow";
        line1part3.color = "greenyellow";
        line1part1.draw();
        line1part4.draw();
        line1part2.draw();
        line1part3.draw();
    }
    if (+slider1.value < 138) {
        line1part1.color = "black";
        line1part4.color = "greenyellow";
        line1part2.color = "greenyellow";
        line1part3.color = "greenyellow";
        line1part1.draw();
        line1part4.draw();
        line1part2.draw();
        line1part3.draw();
    }
}
//To change color of lines if liquid rises to lower tank's one fourth level
function slider2check() {
    if (+slider2.value > 40) {
        line2part1.color = "greenyellow";
        line2part2.color = "greenyellow";
        line2part3.color = "greenyellow";
        line2part1.draw();
        line2part2.draw();
        line2part3.draw();
        circlerotate();
    }
    else {
        line2part1.color = "black";
        line2part2.color = "black";
        line2part3.color = "black";
        line2part1.draw();
        line2part2.draw();
        line2part3.draw();
    }
}
//To rotate the inner circle with desired color changes for both circles
function circlerotate() {
    context.clearRect(665, 426, 55, 60);
    //Multiple rotate functions to increase speed of rotation
    l1.rotate();
    l1.rotate();
    l1.rotate();
    l1.rotate();
    l1.rotate();
    l1.rotate();
    if (+slider1.value < 138 && +slider2.value > 40) {
        circle.color = "green";
        line1part1.color = "greenyellow";
    }
    circle.draw();
    l1.color = "yellow";
    l1.draw();
    if (i < 139) {
        context.clearRect(170, 190, 150, 240);
        wtank1.draw(i);
        // If liquid level reaches to slider value 137 i.e. full level, the color changes will be as follows 
        if (i == 137) {
            circle.color = "grey";
            circle.draw();
            l1.color = "yellow";
            l1.draw();
            line1part1.color = "greenyellow";
            line1part1.draw();
            line1part2.color = "black";
            line1part3.color = "black";
            line1part4.color = "black";
            line1part2.draw();
            line1part3.draw();
            line1part4.draw();
        }
        // If liquid level lies above slider value 137, the color changes will be as follows
        else if (i > 137) {
            circle.color = "grey";
            circle.draw();
            l1.color = "grey";
            l1.draw();
        }
        //If it lies below 137, changes will be as follows
        else {
            line1part1.color = "black";
            line1part1.draw();
            line1part2.color = "greenyellow";
            line1part3.color = "greenyellow";
            line1part4.color = "greenyellow";
            line1part2.draw();
            line1part3.draw();
            line1part4.draw();
            l1.color = "yellow";
            l1.draw();
        }
        i++;
    }
    //Animation active only if minimum slider2 value is 40 and slider1 value is less than 137
    if (+slider2.value > 40 && i < 138) {
        window.requestAnimationFrame(circlerotate);
        slider1.value = '138'; // Changing slider value once the liquid rises to top
    }
}
//Function check() to call circlerotate() with i as slider1's value (provided slider2's value is greater than 40,i.e.1/4 level)
function check() {
    if (+slider2.value > 40) {
        i = +slider1.value;
        circlerotate();
    }
}
//Function finalcheck to color both the circles grey
function finalcheck() {
    if (+slider1.value > 137) {
        circle.color = "grey";
        circle.draw();
        l1.color = "grey";
        l1.draw();
        circle.color = "green";
    }
}
//# sourceMappingURL=app2.js.map
