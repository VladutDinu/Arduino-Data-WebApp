
window.onload = function () {

    var options = {
		
        animationEnabled: true,
        theme: "light2",
        title:{
            text: "Grafic in functie de timp si temperatura"
        },
        axisX:{
            title: "Time",
            valueFormatString: "DD MMM"
        },
        axisY: {
            title: "Temperature",
            suffix: " Celsius",
            minimum: 0
        },
        toolTip:{
            shared:true
        },  
        legend:{
            cursor:"pointer",
            verticalAlign: "bottom",
            horizontalAlign: "left",
            dockInsidePlotArea: true,
            itemclick: toogleDataSeries
        },
        data: [{
            type: "line",
            showInLegend: true,
            name: "Temperature",
            markerType: "square",
            xValueFormatString: "DD MMM, YYYY",
            color: "#F08080",
            yValueFormatString: "#,##0Celsius",
            dataPoints: [
                { x: new Date(2017, 10, 1), y: 26 },
                { x: new Date(2017, 10, 2), y: 27 },
                { x: new Date(2017, 10, 3), y: 30 },
                { x: new Date(2017, 10, 4), y: 30 },
                { x: new Date(2017, 10, 5), y: 31 },
                { x: new Date(2017, 10, 6), y: 32 },
                { x: new Date(2017, 10, 7), y: 32 },
                { x: new Date(2017, 10, 8), y: 33 },
                { x: new Date(2017, 10, 9), y: 33 },
                { x: new Date(2017, 10, 10), y: 34 },
                { x: new Date(2017, 10, 11), y: 35 },
                { x: new Date(2017, 10, 12), y: 35 },
                { x: new Date(2017, 10, 13), y: 35 },
                { x: new Date(2017, 10, 14), y: 33 },
                { x: new Date(2017, 10, 15), y: 32 }
            ]
        },
        {
            type: "line",
            showInLegend: true,
            name: "Time",
            lineDashType: "dot  ",
            yValueFormatString: "#,##0 ",
            dataPoints: [
                { x: new Date(2017, 10, 1), y: 8.00 },
                { x: new Date(2017, 10, 2), y: 8.30},
                { x: new Date(2017, 10, 3), y: 9.00 },
                { x: new Date(2017, 10, 4), y: 9.30 },
                { x: new Date(2017, 10, 5), y: 10.00 },
                { x: new Date(2017, 10, 6), y: 10.30 },
                { x: new Date(2017, 10, 7), y: 11.00 },
                { x: new Date(2017, 10, 8), y: 11.30 },
                { x: new Date(2017, 10, 9), y: 12.00 },
                { x: new Date(2017, 10, 10), y: 12.30 },
                { x: new Date(2017, 10, 11), y: 13.00 },
                { x: new Date(2017, 10, 12), y: 13.30 },
                { x: new Date(2017, 10, 13), y: 14.00 },
                { x: new Date(2017, 10, 14), y: 14.30 },
                { x: new Date(2017, 10, 15), y: 15.00 }
            ]
        }]
    };
    $("#chartContainer").CanvasJSChart(options);
    
    function toogleDataSeries(e){
        if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        } else{
            e.dataSeries.visible = true;
        }
        e.chart.render();
    }
    
    }