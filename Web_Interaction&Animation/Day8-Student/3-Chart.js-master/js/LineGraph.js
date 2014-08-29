$(function () {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    var lineChartData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                fillColor: "rgba(220,220,220,0.5",
                strokeColor: "rgba(166,209,122,0.5",
                pointColor: "rgba(166,209,122,0.5",
                pointStrokeColor: "#fff",
                data: [1,20,40,20,60,75,40]

            },
            {
                fillColor: "rgba(242,140,185,0.5",
                strokeColor: "rgba(242,140,18,1",
                pointColor: "rgba(242,140,185,1",
                pointStrokeColor: "#fff",
                data: [15,30,45,60,30,60,76]
            }
        ]
    };

    var options = {
        onAnimationComplete: done
    };

    var myLine = new Chart(ctx).Line(lineChartData, options) ;

    function done(){
        //saves canvas image as a data url
        var dataURL = canvas.toDataURL();

        //set canvasImg src to DataUrl
        //so it can be saved as an image.

        document.getElementById('canvasImg').src = dataURL;
        $("#canvas").hide();

    }

});