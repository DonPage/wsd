window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {

        ctx.globalAlpha = 1.0; //default value
        //array of rectangles

        var rects = [
                    {x:20, y:20, width:75, height:75 },
					{x:40, y:50, width:75, height:75 },
					{x:150, y:20, width:75, height:75 },
					{x:170, y:50, width:75, height:75 },
					{x:280, y:20, width:75, height:75 },
					{x:300, y:50, width:75, height:75 },
					{x:410, y:20, width:75, height:75 },
					{x:430, y:50, width:75, height:75 }


        ];


        for (var i=0;i<rects.length; i+=2){
            ctx.fillStyle = "blue";
            ctx.fillRect(rects[i].x,rects[i].y,rects[i].width, rects[i].height);
            ctx.fillStyle = "red";
            ctx.fillRect(rects[i+1].x,rects[i+1].y,rects[i+1].width, rects[i+1].height);
            ctx.globalAlpha -= .3;

        }















































//				//Set globalAlpha
//				ctx.globalAlpha = 1.0 //Default value
//
//
//				// Create an array of rectangles
//
//				var rects = [
//					{x:20, y:20, width:75, height:75 },
//					{x:40, y:50, width:75, height:75 },
//					{x:150, y:20, width:75, height:75 },
//					{x:170, y:50, width:75, height:75 },
//					{x:280, y:20, width:75, height:75 },
//					{x:300, y:50, width:75, height:75 },
//					{x:410, y:20, width:75, height:75 },
//					{x:430, y:50, width:75, height:75 },
//
//
//				]
//
//
//				// Use a for loop and cycle through drawing them out
//
//				for(var i = 0; i<rects.length; i+=2){
//
//					ctx.fillStyle = "blue";
//					ctx.fillRect(rects[i].x, rects[i].y, rects[i].width, rects[i].height);
//
//					// Create a 2nd square
//					ctx.fillStyle = "red";
//					ctx.fillRect(rects[i+1].x, rects[i+1].y, rects[i+1].width, rects[i+1].height);
//
//					// Each time around change the globalAlpha
//
//					ctx.globalAlpha -=.3;
//
//					}
				

		}
	}
}