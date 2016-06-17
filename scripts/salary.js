'use strict';

$(document).ready(createMap);
function createMap() {
    $('#salary').click(initMap);
}

function initMap() {
    var mapDiv = document.getElementById('salaryContainer');
    var map = new google.maps.Map(mapDiv, {
        center: {lat: 51.540, lng: 15.546},
        zoom: 5,
        mapTypeControl: true,
        mapTypeControlOptions:
        {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
            position: google.maps.ControlPosition.TOP
        }
    });
    var lastInfowindow;

    countries = countries.map(addMarker);
    function addMarker(country) {
        country.marker = new google.maps.Marker({
            position: country.capitalPosition,
            map: map,

            animation: google.maps.Animation.DROP
        });
        country.marker.addListener('click', function() {
            map.setCenter(this.getPosition());
            if(lastInfowindow){
                lastInfowindow.close();
            }
            lastInfowindow = new google.maps.InfoWindow({
                content: country.avSalary,
                position: map.center
            });
            lastInfowindow.open(map);
        });
        return country;
    }
}

