/**
 * Created by dawid on 09.06.16.
 */

'use strict';

AmCharts.ready(function(migration) {
   var chart = new AmCharts.AmSerialChart();
    chart.dataProvider = $chart;
    chart.categoryField = "category";
   var graph = new AmCharts.AmGraph();
    graph.valueField = "column-1";
    graph.type = "smothedline";
    chart.addGraph(graph);

    chart.write('chartdiv');


});


var $chart = AmCharts.makeChart("chartdiv",
    {
        "type": "serial",
        "categoryField": "category",
        "angle": 30,
        "autoMarginOffset": 40,
        "depth3D": 100,
        "marginRight": 60,
        "marginTop": 60,
        "startDuration": 1,
        "fontSize": 13,
        "theme": "black",
        "categoryAxis": {
            "gridPosition": "start"
        },
        "trendLines": [],
        "graphs": [
            {
                "balloonText": "[[title]] of [[category]]:[[value]]",
                "bullet": "round",
                "bulletSize": 10,
                "id": "AmGraph-1",
                "lineAlpha": 1,
                "lineThickness": 3,
                "title": "Poland",
                "type": "smoothedLine",
                "valueField": "column-1"
            },
            {
                "balloonText": "[[title]] in [[category]]:[[value]]",
                "bullet": "round",
                "bulletSize": 10,
                "id": "AmGraph-2",
                "lineAlpha": 1,
                "lineThickness": 3,
                "title": "Hungary",
                "valueField": "column-2"
            },
            {
                "balloonText": "[[title]] in [[category]]:[[value]]",
                "bullet": "round",
                "bulletSize": 10,
                "id": "AmGraph-3",
                "lineAlpha": 1,
                "lineThickness": 3,
                "title": "Lithuania",
                "valueField": "column-3"
            },
            {
                "balloonText": "[[title]] in [[category]]:[[value]]",
                "bullet": "round",
                "bulletSize": 10,
                "id": "AmGraph-4",
                "lineAlpha": 1,
                "lineThickness": 3,
                "title": "Latvia",
                "valueField": "column-4"
            },
            {
                "balloonText": "[[title]] in [[category]]:[[value]]",
                "bullet": "round",
                "bulletSize": 10,
                "id": "AmGraph-5",
                "lineAlpha": 1,
                "lineThickness": 3,
                "title": "Estonia",
                "valueField": "column-5"
            },
        ],
        "guides": [],
        "valueAxes": [
            {
                "id": "ValueAxis-1",
                "title": ""
            }
        ],
        "allLabels": [],
        "balloon": {},
        "titles": [],
        "dataProvider": [
            {
                "category": "1995",
                "column-1": -18224,
                "column-2": 17906,
                "column-3": 10000,
                "column-4": 15000,
                "column-5": 5000
            },
            {
                "category": "1996",
                "column-1": -12766,
                "column-2": 17876,
                "column-3": 10000,
                "column-4": 15000,
                "column-5": 5000

            },
            {
                "category": "1997",
                "column-1": -11797,
                "column-2": 17561,
                "column-3": 10000,
                "column-4": 15000,
                "column-5": 5000
            },
            {
                "category": "1998",
                "column-1": -13261,
                "column-2": 17261,
                "column-3": 10000,
                "column-4": 15000,
                "column-5": 5000
            },
            {
                "category": "1999",
                "column-1": -14011,
                "column-2": 16793,
                "column-3": 10000,
                "column-4": 15000,
                "column-5": 5000
            },
            {
                "category": "2000",
                "column-1": -19669,
                "column-2": 16658,
                "column-3": 10000,
                "column-4": 15000,
                "column-5": 5000
            },
            {
                "category": "2001",
                "column-1": -16743,
                "column-2": 9691,
                "column-3": 10000,
                "column-4": 15000,
                "column-5": 5000
            },
            {
                "category": "2002",
                "column-1": -17945,
                "column-2": 3538,
                "column-3": 10000,
                "column-4": 15000,
                "column-5": 5000
            },
            {
                "category": "2003",
                "column-1": -13765,
                "column-2": 15556,
                "column-3": 10000,
                "column-4": 15000,
                "column-5": 5000
            },
            {
                "category": "2004",
                "column-1": -9382,
                "column-2": 18162,
                "column-3": 10000,
                "column-4": 15000,
                "column-5": 5000
            },
            {
                "category": "2005",
                "column-1": -12878,
                "column-2": 17268,
                "column-3": 10000,
                "column-4": 15000,
                "column-5": 5000
            },
            {
                "category": "2006",
                "column-1": -36134,
                "column-2": 21309,
                "column-3": 10000,
                "column-4": 15000,
                "column-5": 5000
            },
            {
                "category": "2007",
                "column-1": -20485,
                "column-2": 14568,
                "column-3": 10000,
                "column-4": 15000,
                "column-5": 5000
            },
            {
                "category": "2008",
                "column-1": -14865,
                "column-2": 16452,
                "column-3": 10000,
                "column-4": 15000,
                "column-5": 5000
            },
            {
                "category": "2009",
                "column-1": -1196,
                "column-2": 17321,
                "column-3": 10000,
                "column-4": 15000,
                "column-5": 5000
            },
            {
                "category": "2010",
                "column-1": 5027,
                "column-2": 11519,
                "column-3": 10000,
                "column-4": 15000,
                "column-5": 5000
            },
            {
                "category": "2011",
                "column-1": -11841,
                "column-2": 12755,
                "column-3": 10000,
                "column-4": 15000,
                "column-5": 5000
            },
            {
                "category": "2012",
                "column-1": -2726,
                "column-2": 16044,
                "column-3": 10000,
                "column-4": 15000,
                "column-5": 5000
            },
            {
                "category": "2013",
                "column-1": -26943,
                "column-2": 5720,
                "column-3": 10000,
                "column-4": 15000,
                "column-5": 5000
            },
            {
                "category": "2014",
                "column-1": -10935,
                "column-2": 11219,
                "column-3": 10000,
                "column-4": 15000,
                "column-5": 5000
            }
        ]
    }
);