window.onload = function() {

    var canvas = document.getElementById("canvas1");
    var stage = new createjs.Stage(canvas);

    //create a graphic
    var shape = new createjs.Shape();

    //create a stroke
    shape.graphics.beginStroke("purple");
    shape.graphics.setStrokeStyle(10,0,1); //10px width, butt caps, round joint.

    //need an origin and radius
    //drawCircle(x,y,radius)
    shape.graphics.drawCircle(100, 100, 50);

    //draw an ellipse
    shape.graphics.drawEllipse(75,200,150,50);

    //arc(x,y,radius,startAngle, endAngle, anticlockwise=1 or clockwise=0);
    //angles are radians
    shape.graphics.beginStroke("red");
    shape.graphics.arc(100,100,75,0,-90*(Math.PI/180, 1)); //1 = anticlockwise



    stage.addChild(shape);
    stage.update();






















































	
//	// Canvas & stage
//	var canvas = document.getElementById("canvas1");
//	var stage = new createjs.Stage(canvas);
//
//
//	//Create a shape
//	var shape = new createjs.Shape();
//
//	//Set Stroke
//	shape.graphics.beginStroke("purple");
//	shape.graphics.setStrokeStyle(10, 0, 1);
//
//	//Draw circle
//	//drawCircle(x, y, radius)
//	shape.graphics.drawCircle(100, 100, 50);
//
//
//	//Draw Ellipse
//	//drawEllipse(x, y, w, h)
//	shape.graphics.drawEllipse(75, 200, 150, 50);
//
//
//	//Drawing arcs
//	//arc(x, y, radius, startAngle, endAngle, anticlockwise = 1 clockwise*=0)
//	//Angles are in radians!
//
//	shape.graphics.beginStroke("red");
//	shape.graphics.arc(100,100, 75, 0, -90*(Math.PI/180), 1);
//
//
//
//	stage.addChild(shape);
//	stage.update();
	

}