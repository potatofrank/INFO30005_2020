/*var chartData = findAllTotalCase;

var findAllTotalCase = function(req, res, next) {
    var myData;
    totalCase.find({})
        .lean()
        .then(function(doc) {
             myData = doc;
            //console.log([doc[doc.length - 1]]);
        });
    return myData;
};*/

google.charts.load("current", {packages: ["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ["Element", "NumOfCases", {role: "style"}],
        ["0-25", 80, "#F92C00"],
        ["26-50", 170, "#EA6A06"],
        ["51-75", 320, "#FCF402"],
        ["Over 75", 160, "#7BFC02"]
    ]);
    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
        {
            calc: "stringify",
            sourceColumn: 1,
            type: "string",
            role: "annotation"
        },
        2]);
    var options = {
        title: "The Number of different group of age people caught COVID-19",
        width: 600,
        height: 400,
        bar: {groupWidth: "95%"},
        legend: {position: "none"},
    };
    var chart = new google.visualization.BarChart(document.getElementById("barchart_values"));
    chart.draw(view, options);
}