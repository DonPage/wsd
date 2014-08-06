window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {
    	ctx.strokeStyle = "blue";
        ctx.lineWidth = 5;

        //stroke a simple bezier curve;
        ctx.beginPath();
        ctx.moveTo(50,200);
        ctx.bezierCurveTo(50,100,200,100,200,150);
        ctx.stroke();


        //make the controle points visible
        ctx.strokeStyle = ('rgba(0,0,0,.25)');
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.beginPath();
        ctx.moveTo(50, 200);
        ctx.lineTo(50, 100);
        ctx.lineTo(200, 100);
        ctx.lineTo(200,150);
        ctx.stroke();

        ctx.strokeStyle = "green";
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(400, 200);
        ctx.quadraticCurveTo(400, 100, 600, 150);
        ctx.stroke();


        //draw the control points
        ctx.strokeStyle = ('rgba(0,0,0,.25)');
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(400,200);
        ctx.lineTo(400, 100);
        ctx.lineTo(600, 150);
        ctx.stroke();
						
						
						
						
		}
	}
};