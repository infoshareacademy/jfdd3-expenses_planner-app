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
        "autoMarginOffset": 40,
        "marginRight": 60,
        "marginTop": 60,
        "startDuration": 1,
        "fontSize": 13,
        "theme": "dark",
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
            }
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
                "column-2": 17906
            },
            {
                "category": "1996",
                "column-1": -12766,
                "column-2": 17876
            },
            {
                "category": "1997",
                "column-1": -11797,
                "column-2": 17561
            },
            {
                "category": "1998",
                "column-1": -13261,
                "column-2": 17261
            },
            {
                "category": "1999",
                "column-1": -14011,
                "column-2": 16793
            },
            {
                "category": "2000",
                "column-1": -19669,
                "column-2": 16658
            },
            {
                "category": "2001",
                "column-1": -16743,
                "column-2": 9691
            },
            {
                "category": "2002",
                "column-1": -19669,
                "column-2": 16658
            },
            {
                "category": "2003",
                "column-1": -19669,
                "column-2": 16658
            },
            {
                "category": "2004",
                "column-1": -19669,
                "column-2": 16658
            },
            {
                "category": "2005",
                "column-1": -19669,
                "column-2": 16658
            },
            {
                "category": "2006",
                "column-1": -19669,
                "column-2": 16658
            },
            {
                "category": "2007",
                "column-1": -19669,
                "column-2": 16658
            },
            {
                "category": "2008",
                "column-1": -19669,
                "column-2": 16658
            },
            {
                "category": "2009",
                "column-1": -19669,
                "column-2": 16658
            },
            {
                "category": "2010",
                "column-1": -19669,
                "column-2": 16658
            },
            {
                "category": "2011",
                "column-1": -19669,
                "column-2": 16658
            },
            {
                "category": "2012",
                "column-1": -19669,
                "column-2": 16658
            },
            {
                "category": "2013",
                "column-1": -19669,
                "column-2": 16658
            },
            {
                "category": "2014",
                "column-1": -19669,
                "column-2": 16658
            }
        ]
    }
);