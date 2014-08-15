window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {

        var rotation = 0;
        var srcImg = document.getElementById("img1");


        //find the middle of the canvas.
        ctx.translate(theCanvas.width/2, theCanvas.height/2);

        setInterval(function(){
           rotation += 8;
            ctx.clearRect(-300, -300, theCanvas.width, theCanvas.height);
            ctx.rotate(rotation*(Math.PI/180));
            ctx.drawImage(srcImg, -75, -75, 150, 150);
        }, 100);

        var width = 10;
        var height = 20;
        ctx.fillStyle = "green";


        setInterval(function(){
            ctx.fillRect(0,0,width,height);
            width+=20;
            height+=20;

        });









































		
		
//		//create variables for the rotation and our image
//
//		var rotation = 0;
//
//		var srcImg = document.getElementById("img1");
//
//		// Translate to the center of the canvas
//
//		ctx.translate(theCanvas.width/2, theCanvas.height/2);
//
//
//		//setInterval(function, time (ms));
//
//		setInterval( function(){
//
//			//draw image on the screen
//
//
//			//Clear the screen
//			//clearRect( x, y, w, h );
//			ctx.clearRect(-theCanvas.width/2, -theCanvas.height/2, theCanvas.width, theCanvas.height );
//
//
//			rotation +=8;
//			ctx.rotate(rotation * (Math.PI/180));
//			//Center our image on the screen
//			ctx.drawImage(srcImg, -75, -75, 150, 150);
//
//
//
//			}, 100)
				
						
		}
	}
};