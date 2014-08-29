google.load('visualization', '1', {packages: ["corechart"]});

//once libraries are loaded fun function
google.setOnLoadCallback(drawChart);

//drawchart function
function drawChart(){
    //create a data table using an array
    var data = google.visualization.arrayToDataTable([

        ['Task', 'Hours per day'],
        ['Work', 8],
        ['Eat', 2],
        ['Commute', 2],
        ['Watch TV', 2],
        ['Sleep', 7]

    ]);

    var options = {
        title: "My Daily Activities",
        pieHole: 0.4,
        pieSliceText: 'label',
        pieStartAngle: 100,
        legend: {position: 'labeled'},
        tooltip:{trigger: 'none'}
    };

    //create the variable & location to where it goes.
    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    //draw the chart

    chart.draw(data, options);
}