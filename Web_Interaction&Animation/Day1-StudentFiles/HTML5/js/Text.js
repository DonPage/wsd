window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {

        var theString = "Drawing text on a canvas";

        //draw a simple test using default settings.
        ctx.fillText(theString, 20, 20);

        //draw the string with some font information.
        ctx.font = "25pt Helvetica";
        ctx.fillText(theString,20,60);

        //draw the string with both a stroke and a fill with some opacity setting.
        ctx.font = "32pt Verdana";
        ctx.fillStyle = "yellow";
        ctx.strokeStyle = "rgba(0,255,0,0.8)";
        ctx.fillText(theString, 20, 160);
        ctx.strokeText(theString, 20, 160);

						
						
						
						
		}
	}
};