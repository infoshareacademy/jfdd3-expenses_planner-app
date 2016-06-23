
$(document).ready(function () {
    $('.pages > div').hide();
// Show chosen div, and hide all others
    $(".menu div").click(function () {
        $('.pages > div').hide();
        $('.menu > div').removeClass('activebutton');
        $('#' + $(this).attr('id') + "Container").show().css({"height": "90vh"}).addClass('animation');
        $('#' + $(this).attr('id')).addClass('activebutton');
        $(".menu").css({"height": "10vh"});
        $(".floatflex").css({"align-self": "center", "padding": "0", "padding-left": "5vw"});
        $("#planner, #currency, #salary, #migration, #spreadSheet").css({
            "background-size": "5vh",
            "background-position": "left 8vh center"
        });
        google.maps.event.trigger(MapInstance, 'resize');
        $('.intro').hide();
    });
});