'use strict';

$('#planner').click(openPlanner);

var openPlanner = function (){
    $('.intro').css({
        display: 'none'
    });

    var mapDiv = document.getElementById('mapka');
    var map = new google.maps.Map(mapDiv, {
        center: {lat: 51.540, lng: 15.546},
        zoom: 5
    });

}
