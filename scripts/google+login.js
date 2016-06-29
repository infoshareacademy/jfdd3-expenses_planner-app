'use strict';

    function onSignIn(googleUser) {
        var profile = googleUser.getBasicProfile();
        var greeting = $('<div>')
            .append($('<span>')).addClass(".greetingSpan").text("Witaj " + profile.getName())
            .append($('<br>'))
            .append($('<img>').attr({src: profile.getImageUrl()}).addClass("greetingImage"));

        $('#spreadSheetContainer .spreadSheetC').removeClass('inactiveContainer');
        $('.inactive').attr("id","spreadSheet").removeClass("inactive");
        $('.inactiveFloatFlex').removeClass("inactiveFloatFlex").addClass("floatflex");
        $('#spreadSheet > p.inactiveSmallFloatFlex').removeClass("inactiveSmallFloatFlex").addClass("smallFloatFlex");

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

        $('#spreadSheetContainer .spreadSheetC').addClass('inactiveContainer');
        $('#spreadSheet > p.floatflex').removeClass("floatflex").addClass("inactiveFloatFlex");
        $('#spreadSheet > p.smallFloatFlex').removeClass("smallFloatFlex").addClass("inactiveSmallFloatFlex");
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


