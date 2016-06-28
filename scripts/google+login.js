'use strict';

    function onSignIn(googleUser) {
        var profile = googleUser.getBasicProfile();
        var greeting = $('<div>')
            .append($('<span>')).addClass(".greetingSpan").text("Witaj " + profile.getName())
            .append($('<br>'))
            .append($('<img>').attr({src: profile.getImageUrl()}).addClass("greetingImage"));

        $('.inactive').attr("id","spreadSheet").removeClass("inactive");
        $('.inactiveFloatFlex').removeClass("inactiveFloatFlex").addClass("floatflex");
        $('.g-signin2').fadeOut(50);
        $('#gSignOutWrapper').fadeIn(1000);
        $('.inactiveText').fadeOut(100);

        greeting.addClass('greeting')
            .appendTo(".logInfo").delay(2000)
            .fadeOut(1000, function () {
                $(this).remove()});
    }

    function signOut() {
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
                console.log('User signed out.');
            });

            var greeting = $('<div>')
                .append($('<span>').addClass("logOutSpan").text("Żegnaj "));
        $('#spreadSheet > p.floatflex').removeClass("floatflex").addClass("inactiveFloatFlex");
        $('#spreadSheet').removeAttr("id","spreadSheet").addClass("inactive");
        $('#gSignOutWrapper').fadeOut(50);
            $('.g-signin2').fadeIn(1000);
            $('.inactiveText').fadeIn(100);

            greeting.addClass('greetingLogOut')
                .appendTo(".logInfo").delay(2000)
                .fadeOut(1000, function () {
                $(this).remove();
            });

    }


