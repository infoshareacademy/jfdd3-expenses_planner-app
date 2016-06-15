'use strict';


$(document).ready(createMap);
function createMap() {
    $('#salary').click(initMap);
}


function initMap() {
    var mapDiv = document.getElementById('salaryContainer');
    var map = new google.maps.Map(mapDiv, {
        center: {lat: 51.540, lng: 15.546},
        zoom: 5
    });

    var contentString = 'Polska - 1000 $';
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    var iconBase = 'https://maps.google.com/mapfiles/kml/pal2/';
    var poland = new google.maps.Marker({
        position: {lat: 51.540, lng: 21.046},
        map: map,
        icon: iconBase + 'icon58.png',
        animation: google.maps.Animation.DROP

    });
    poland.addListener('click', toggleBounce);
    function toggleBounce() {
        if (poland.getAnimation() !== null) {
            poland.setAnimation(null);
        } else {
            poland.setAnimation(google.maps.Animation.BOUNCE);
        }
    }
    poland.addListener('click', function(){
        infowindow.open(map, poland);
    });






}

