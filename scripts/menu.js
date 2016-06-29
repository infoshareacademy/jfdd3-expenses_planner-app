'use strict';

$(document).ready(function () {
    $('.pages > div').hide();
// Show chosen div, and hide all others
    $(".menu div").click(function () {

        $('.pages > div').hide();
        $('.menu > div').removeClass('activebutton');
        $('#' + $(this).attr('id') + "Container").show().css({"height": "90vh"}).addClass('animation');
        $('#' + $(this).attr('id')).addClass('activebutton');

        $(".floatflex").addClass("smallFloatFlex");
        $(".inactive .inactiveFloatFlex").removeClass("smallFloatFlex").addClass("inactiveSmallFloatFlex");

        $("#planner, #currency, #salary, #migration, #spreadSheet, #googlelogin")
            .css({
            "height": "10vh",
            "background-size": "5vh",
            "background-position": "left 1vw center"
        });

        $(".mainMenu").addClass("small");

        $("sign-out, #my-signin2").addClass("buttonSmall");

        google.maps.event.trigger(MapInstance, 'resize');

        $('.intro').hide();

        $('.menu').addClass('small');
    });
});