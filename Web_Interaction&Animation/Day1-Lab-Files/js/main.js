/*
     Name:
     Date:
     Class & Section:  WIA-####
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message


/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.

********************************************/

//Draw Rectangle here
var part1 = document.getElementById('part1');
var ctx = part1.getContext('2d');
if (ctx){
    ctx.strokeStyle = "black";
    ctx.fillStyle = 'blue';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(50,0);
    ctx.lineTo(50,50);
    ctx.lineTo(0,50);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

}



/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/


//Draw Circle here
var part2 = document.getElementById('part2');
var ctx2 = part2.getContext('2d');
if (ctx2){
    var radius = 20;
    ctx2.strokeStyle = "black";
    ctx2.fillStyle = ("rgba(255,0,0,.5)");
    ctx2.beginPath();
    ctx2.arc(50, 50, radius, 0, 2 * Math.PI, false);
    ctx2.fill();
    ctx2.stroke();

}




/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/


//Draw Star here
var part3 = document.getElementById('part3');
var ctx3 = part3.getContext('2d');
if (ctx3){
    ctx3.strokeStyle = "black";
    ctx3.fillStyle = "yellow";
    ctx3.beginPath();
    ctx3.moveTo(100, 100);
    ctx3.lineTo(50, 150);
    ctx3.lineTo(100,150);
    ctx3.lineTo(50,100);
    ctx3.lineTo(80,180);
    ctx3.closePath();
    ctx3.fill();
    ctx3.stroke();
}


/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/

//Draw Umbrella top here
var part4 = document.getElementById('part4');
var ctx4 = part4.getContext('2d');
if (ctx4){
    ctx4.strokeStyle = "black";
    ctx4.fillStyle = "purple";
    ctx4.beginPath();
    ctx4.moveTo(80,170);
    ctx4.bezierCurveTo(90, 10, 388, 10, 388, 170);
    ctx4.closePath();
    ctx4.fill();
    ctx4.stroke();
}

/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

//Draw text here
var part5 = document.getElementById('part5');
var ctx5 = part5.getContext('2d');
if (ctx5){
    ctx5.strikeStyle = "black";
    var text = "Don";
    ctx5.font = "132pt Verdana";
    ctx5.fillStyle = "cyan";
    ctx5.fillText(text, 0, 180);

}

/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/

//Draw images here
var part6 = document.getElementById('part6');
var ctx6 = part6.getContext('2d');
var imageObj = new Image();
imageObj.onload = function(){
    ctx6.drawImage(imageObj, 10, -50, 500, 400);
};
imageObj.src = "image/logo.png";
//var theImage = "<img id='logo-img' src='image/logo.png'>";
//var body = document.getElementById('container');
//body.innerHTML += theImage;




/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

// Draw scene here

var part7 = document.getElementById('part7');
var ctx7 = part7.getContext('2d');
if (ctx7){
    ctx7.strokeStyle = "black";

    var name = "nderwood";
    ctx7.font = "32pt Helvetica";
    ctx7.fillStyle = "black";
    ctx7.fillText(name, 470, 180);
    ctx7.beginPath();

    ctx7.bezierCurveTo(380, 88, 381, 187, 440, 190);
    ctx7.bezierCurveTo(494, 193, 424, 100, 478, 93);
    ctx7.stroke();

}

var theImage = new Image();
theImage.onload = function(){
    ctx7.drawImage(theImage, 0, 0)
};
theImage.src = "image/frank.png";




