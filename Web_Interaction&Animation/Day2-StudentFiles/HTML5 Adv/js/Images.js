window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {

        //create a variable to hold the image
        var srcImg = document.getElementById("img1");

        //draw an image directly onto the canvas at the top left.
//        ctx.drawImage(srcImg, 0,0);


        //draw the image scaled down
        //ctx.drawImage(srcImg, 50, 50, 350, 150);

        //draw portion of the image.
//        ctx.drawImage(srcImg, 350, 200, 125, 100, 50, 50 ,125, 100);

        //draw a video onto the canvas. We need to set and interval function
        //in order to grab each frame from the video and paint it to the canvas.
        var srcVid = document.getElementById("vid1");
        srcVid.play();
        setInterval(function(){
            var theCanvas = document.getElementById("Canvas1");
            var ctx = theCanvas.getContext('2d');
            var srcVid = document.getElementById("vid1");
            ctx.drawImage(srcVid, 0, 0);

        },300);















































//				//create a variable to hold the image
//
//				var srcImg = document.getElementById("img1");
//
//				//Draw the image in to the canvas
//				//ctx.drawImage(srcImg, 0,0);
//
//				//Scale down the image
//				//ctx.drawImage(srcImg, 50, 50, 350, 150);
//
//				//Draw a portion of the image in the canvas
//				//drawImage(image, sx,sy,sw,sh, dx,dy,dw,dh)
//				//ctx.drawImage(srcImg, 350, 200, 125, 100, 50, 50, 250, 200);
//
//				//Draw a video in the canvas
//				//Set interval function
//				//setInterval(function, timing)
//
//				//create a variable to hold the video
//
//				var srcVid = document.getElementById("vid1");
//				srcVid.play();
//
//				setInterval(function(){
//
//					var theCanvas = document.getElementById("Canvas1");
//					var ctx = theCanvas.getContext("2d");
//
//					var srcVid = document.getElementById("vid1");
//
//					//Draw video frame into canvas
//					ctx.drawImage(srcVid, 0,0);
//
//
//					}, 3000);
				
				
				
     						
		}
	}
}