window.onload = function() {
	
	var canvas = document.getElementById("canvas1");
	var stage = new createjs.Stage(canvas);
	
	var sentence = new createjs.Text();
	
	//Modify the text property 
	sentence.text = "This is a sentence about nothing....or is it?";
	
	
	// Font property
	sentence.font = "bold 30px Times";
	
	sentence.color = "blue";
	
	
	//Text is a display object
	//It inherts all of their properties
	// x y
	sentence.x = 150;
	sentence.y = 50;
	//sentence.rotation = 30;
	
	//Text also some "special" properties
	//textAlign - "left", "right", "center"
	sentence.textAlign = "left";
	
	//lineWdith  - wrap the text after a certain point
	sentence.lineWidth = 150;
	
	//Space in between the lines - line height
	sentence.lineHeight = 50;
	
	// Stroke the outside of the text
	//sentence.outline = true;
	
	//You can also chain the command together
	var sentence2 = new createjs.Text("Text we want inside.", "bold 30px Times", "blue");
	
	stage.addChild(sentence2);
	
	
	stage.addChild(sentence);
	stage.update();

}