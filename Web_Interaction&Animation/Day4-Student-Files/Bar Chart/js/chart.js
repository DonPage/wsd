//create some variables

var barSpacing = 0;
var barWidth = 0;
var chartHeight = 0;
var chartHeightArea = 0;
var chartScale = 0;
var maxValue = 0;
var highestYlabel = 0;
var valueMultiplier = 0;

//create doc ready function.
$(document).ready(function(){
    window.chartHeight = Number($('.chart-area').height());
    window.barWidth = $('.char-area .chart-bar').width();
    window.highestYlabel = Number($('.char-y-axis p').first().html());
    window.chartHeightArea = window.chartHeight - Number($('p.axis-value').first().height());
    window.chartScale = chartHeightArea / window.highestYlabel;
    window.barSpacing = Number($('.chart-area').attr('bar-spacing'));
    positionBars();
});

function positionBars(){
    //create a function that will position each bar
    $('.chart-area .chart-bar').each(function(index){
       var barPosition = (window.barWidth * index) + (index*window.barSpacing) + window.barSpacing;
        $(this).css('left', barPosition + 'px');

        //add text to bar and x-axis
        $(this).html('<p>' + $(this).attr("bar-value") + '</p>');

        //x-axis
        $('.chart-x-axis').append('<p style="left:'+(barPosition - (window.barWidth/2))+'px;">'+$(this).attr('label')+'</p>');

        //relative height of the bars
        var barValue = Number($(this).attr("bar-value"));

        if(barValue >window.maxValue){
            window.maxValue = barValue;
            window.valueMultiplier = window.maxValue /window.highestYlabel;
        }

    });

    animateChart();

}


//animation for the chat
function animateChart(){
    //get each bar and animate it to its proper height.
    $(".char-area .char-bar").each(function(index){
       //height relative to height
        var revisedValue = Number($(this).attr("bar-value")) * window.chartScale;
        //create a variable for delay
        var newDelay = 125*index;
        //animate bar
        $(this).delay(newDelay).animate({height:revisedValue}, 1000, function(){
            //fade in our <p> tags.
            $(this).children("p").delay(500).fadeIn(250);
        });
    });

}
