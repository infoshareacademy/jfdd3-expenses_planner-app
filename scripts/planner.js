'use strict';

$(document).ready(setupMap);
function setupMap() {
    $('#planner').click(showMap);
}

function showMap() {
    var mapDiv = $('#map').get(0);
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
    window.MapInstance = map;
    //TODO: pomyśleć nad podziałem na mniejsze funkcje
    //init();
    //addAutocompleteControl();
    //addMarkerListener();
    //addPlaceChangeListener();

    var input = $('<input id="pac-input" class="controls" type="text" placeholder="Enter a location">').get(0);

    var autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.bindTo('bounds', map);

    map.controls[google.maps.ControlPosition.TOP_RIGHT].push(input);

    var infowindow = new google.maps.InfoWindow();
    var marker = new google.maps.Marker({
        map: map
    });
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });

    autocomplete.addListener('place_changed', function() {
        infowindow.close();
        var place = autocomplete.getPlace();
        if (!place.geometry) {
            return;
        }

        if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
        } else {
            map.setCenter(place.geometry.location);
            map.setZoom(17);
        }

        // Set the position of the marker using the place ID and location.
        marker.setPlace({
            placeId: place.place_id,
            location: place.geometry.location
        });
        marker.setVisible(true);

        infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
            'Place ID: ' + place.place_id + '<br>' +
            place.formatted_address);
        infowindow.open(map, marker);
    });
}