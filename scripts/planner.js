'use strict';

$(document).ready(setupMap);
function setupMap() {
    $('#planner').click(showMap);
}

var currentPlace;
var locationData = [];

function showMap() {
    var mapDiv = $('#map').get(0);
    var map = new google.maps.Map(mapDiv, {
        center: {lat: 50.05, lng: 14.25},
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
        currentPlace = place;
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

    var directionsService = new google.maps.DirectionsService();
    var directionsDisplay = new google.maps.DirectionsRenderer();
    //var service = new google.maps.DistanceMatrixService();
    directionsDisplay.setMap(map);
    function calcRoute() {
        console.log(locationData);
        var start = locationData[0].name;
        var end = locationData[locationData.length - 1].name;
        var request = {
            origin:start,
            destination:end,

            waypoints: locationData.slice(1, locationData.length - 1).map(function (item) {
                return {
                    location: item.name,
                    stopover: true
                };
            }),
            travelMode: google.maps.TravelMode.DRIVING
        };
        directionsService.route(request, function(result, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                console.log(result);
                directionsDisplay.setDirections(result);
            }
        });
    }

    //function getDistance() {
    //    var distance = [];
    //    service.getDistanceMatrix(
    //        {
    //            origins: [locationData[0].formatted_address],
    //            destinations: [locationData[length-1].formated_address],
    //            travelMode: google.maps.TravelMode.DRIVING,
    //            unitSystem: google.maps.UnitSystem.METRIC,
    //            avoidHighways: false,
    //            avoidTolls: false
    //        }, function(response, status) {
    //            if (status !== google.maps.DistanceMatrixStatus.OK) {
    //                alert('Error was: ' + status);
    //            } else {
    //                console.log(response);
    //            }
    //        });
    //    var distanceToDisplay = function (){
    //        distance.reduce(prev, next) {
    //            return prev + next;
    //        }
    //    }
    //}

    $('#addToRoute').off('click').on('click', function() {
        var $nowyCel = $('<a>').addClass('list-group-item');
        locationData.push(currentPlace);
        calcRoute();
        $nowyCel.text(currentPlace.name);
        console.log($nowyCel);
        $('.route').append($nowyCel);
        //getDistance();
    })

}