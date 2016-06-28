
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();

    $('.inactive').attr("id","spreadSheet").removeClass("inactive");

    $('.g-signin2').fadeOut(50);
    $('#gSignOutWrapper').fadeIn(1000);
    var greeting = $('<div>').append($('<span>')).addClass(".greetingSpan").text("Witaj " + profile.getName())
        .append($('<br>'))
        .append($('<img>').attr({src: profile.getImageUrl()}).addClass("greetingImage"));

    $('.inactiveText').fadeOut(100);

    greeting.addClass('greeting').appendTo(".logInfo").delay(2000)
    .fadeOut(1000, function () {
        $(this).remove()});
}



function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
            console.log('User signed out.');
        });
        var greeting = $('<div>').append($('<span>')).addClass(".greetingSpan").text("Żegnaj ");
        $('#gSignOutWrapper').fadeOut(50);
        $('.g-signin2').fadeIn(1000);

        $('#spreadSheet').removeAttr("id","spreadSheet").addClass("inactive");
        $('.inactiveText').fadeIn(100);
        greeting.addClass('greeting').appendTo(".logInfo").delay(2000).fadeOut(1000, function () {
            $(this).remove();
        });
    });
}
