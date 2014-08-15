window.onload = function() {

    var canvas = document.getElementById("canvas1");

    //create out stage wrapped around out canvas
    var stage = new createjs.Stage(canvas);

    //create the graphic
    var shape = new createjs.Shape();

    //create a stroke
    shape.graphics.beginStroke("purple");
    shape.graphics.setStrokeStyle(10,0,1); //10px, butt caps, round joints.

    //draw rectangle
    shape.graphics.rect(50,50,300,300); //start at (50,50)


    //round rectangle
    //drawRoundRect(x,y,w,h, radius)
    shape.graphics.beginStroke("blue");
    shape.graphics.drawRoundRect(75,75,250,250,50);


    //complex round rectangle
    //drawRoundRectComplex(x,y,w,h,radiusTL, radiusRT, radiusBR, radiusBL)
    shape.graphics.beginStroke("red");
    shape.graphics.drawRoundRectComplex(100,100,200,200,50,0,50,0);

    stage.addChild(shape);
    stage.update();




















































//	//Canvas and stage
//	var canvas= document.getElementById("canvas1");
//
//	var stage = new createjs.Stage(canvas);
//
//	//Create a graphic shape
//	var shape = new createjs.Shape();
//
//	//Set stroke styles
//	shape.graphics.beginStroke("purple");
//	shape.graphics.setStrokeStyle(10, 0, 1);
//
//	// Draw a rectangle
//	shape.graphics.rect(50, 50, 300, 300);
//
//	//Rounded Rectangle
//	//drawRoundRect(x, y, w, h, radius)
//	shape.graphics.beginStroke("blue");
//	shape.graphics.drawRoundRect(75,75, 250, 250, 50);
//
//	//Complex Rounded Rectangle
//	//drawRoundRectComplex(x,y,w,h,radiusTl, TR, BR, BL);
//	shape.graphics.beginStroke("red");
//	shape.graphics.drawRoundRectComplex(100, 100, 200, 200, 50,0,50,0);
//
//
//	// add to stage display list
//
//	stage.addChild(shape);
//
//	//Draw it by calling update
//	stage.update();
	
	
}