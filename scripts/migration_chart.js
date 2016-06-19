'use strict';

AmCharts.ready(function(migration) {

    var chart = new AmCharts.AmSerialChart();

    chart.dataProvider = $chart;
    chart.categoryField = "category";

    var graph = new AmCharts.AmGraph();
    graph.valueField = "poland";
    graph.type = "column";
    chart.addGraph(graph);
    chart.write('chartdiv');



});

var $chart = AmCharts.makeChart("chartdiv",
    {
        "type": "serial",
        "categoryField": "category",

        "autoMarginOffset": 40,

        "marginRight": 60,
        "marginTop": 60,

        "startDuration": 1,

        "fontSize": 13,

        "theme": "black",

        "categoryAxis": {
            "gridPosition": "start"
        },
        "trendLines": [],
        "chartCursor": [{
            "selectWithoutZooming": true
        }],

        "dataLoader": {
            "url" : "scripts/chart_data/migration_data.json",
            "format" : "json",
            "async": false,
            "showCurtain": false
        },

        "graphs": [
            {
                "balloonText": "[[title]] w [[category]]:[[value]]",
                "bullet": "round",
                "bulletSize": 10,
                "id": "AmGraph-1",
                "lineAlpha": 2,
                "lineThickness": 4,
                "title": "Polska",
                "valueField": "poland"
            },
            {
                "balloonText": "[[title]] w [[category]]:[[value]]",
                "bullet": "round",
                "bulletSize": 10,
                "id": "AmGraph-2",
                "lineAlpha": 2,
                "lineThickness": 4,
                "title": "Węgry",
                "valueField": "hungary"
            },
            {
                "balloonText": "[[title]] w [[category]]:[[value]]",
                "bullet": "round",
                "bulletSize": 10,
                "id": "AmGraph-3",
                "lineAlpha": 1,
                "lineThickness": 3,
                "title": "Litwa",
                "valueField": "lithuania"
            },
            {
                "balloonText": "[[title]] w [[category]]:[[value]]",
                "bullet": "round",
                "bulletSize": 10,
                "id": "AmGraph-4",
                "lineAlpha": 1,
                "lineThickness": 3,
                "title": "Łotwa",
                "valueField": "latvia"
            },
            {
                "balloonText": "[[title]] w[[category]]:[[value]]",
                "bullet": "round",
                "bulletSize": 10,
                "id": "AmGraph-5",
                "lineAlpha": 1,
                "lineThickness": 3,
                "title": "Estonia",
                "valueField": "estonia"
            }
        ],
        "guides": [],
        "valueAxes": [
            {
                "id": "ValueAxis-1",
                "title": "Wskaźnik migracji w napływie i odpływie ludzi"

            }
        ],
        "allLabels": [],
        "balloon": {},
        "legend": {
            "enabled": true,
            "useGraphSettings": true,
            "align": "center"
        },
        "titles": [
            {
                "id": "Title-1",
                "size": 15,
                "text": "Wykres migracji dla krajów Bałtyckich i Europy Środkowej"
            }
        ],

        "chartProvider": $.dataLoader
    }
);