//-------------
//- PIE CHART -
//-------------
// Get context with jQuery - using jQuery's .get() method.
function chartSetUp(normal,golden,diamond) {
    var pieChartCanvas = $("#pieChart").get(0).getContext("2d");
    var pieChart = new Chart(pieChartCanvas);
    var PieData = [
        {
            value: normal,
            color: "#00C0EF",
            highlight: "#00C0EF",
            label: "普通会员"
        },
        {
            value: golden,
            color: "#F39C12",
            highlight: "#F39C12",
            label: "金卡会员"
        },
        {
            value: diamond,
            color: "red",
            highlight: "red",
            label: "钻石会员"
        }
    ];
    var pieOptions = {
        //Boolean - Whether we should show a stroke on each segment
        segmentShowStroke: true,
        //String - The colour of each segment stroke
        segmentStrokeColor: "#fff",
        //Number - The width of each segment stroke
        segmentStrokeWidth: 4,
        //Number - The percentage of the chart that we cut out of the middle
        percentageInnerCutout: 0, // This is 0 for Pie charts
        //Number - Amount of animation steps
        animationSteps: 100,
        //String - Animation easing effect
        animationEasing: "easeOutBounce",
        //Boolean - Whether we animate the rotation of the Doughnut
        animateRotate: true,
        //Boolean - Whether we animate scaling the Doughnut from the centre
        animateScale: true,
        //Boolean - whether to make the chart responsive to window resizing
        responsive: true,
        // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
        maintainAspectRatio: true,
        //String - A legend template
        legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
    };
//Create pie or douhnut chart
// You can switch between pie and douhnut using the method below.
    pieChart.Doughnut(PieData, pieOptions);
}
