window.onload = function() {
    var canvas = document.getElementById("canvas");

    var stage = new createjs.Stage(canvas);

    //bitmap class used for working with external graphics
    //gif, jpg, png, svg, ect...

    var ship = new createjs.Bitmap("images/ship.png");
    //find the center of the canvas.
    var centerX = canvas.width /2;
    var centerY = canvas.height /2;

    //Set X & Y to place image in the middle of the canvas.
    ship.x = centerX;
    ship.y = centerY;
    ship.regY = 50;
    ship.regX = 50;

    //add the ship
    stage.addChild(ship);

    //set the frame rate for the ticker class
    createjs.Ticker.setFPS(30);

    //easelJS contas a tick function that is called on every frame
    createjs.Ticker.addEventListener("tick", tick);

    function tick(){

        ship.x = centerX + (Math.sin(createjs.Ticker.getTicks()/7)*50);
        ship.y = centerY + (Math.cos(createjs.Ticker.getTicks()/7)*50);
//        ship.x = centerX + Math.random()*5;
//        ship.x =centerX + (Math.random() -.5) *100;
//        ship.y = centerX + Math.random()*5;
        stage.update();

    }




				
			
};