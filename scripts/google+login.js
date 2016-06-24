
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
    $('.g-signin2').fadeOut(50);
    $('#gSignOutWrapper').fadeIn(1000);
    var greeting = $('<div>').append($('<span>')).addClass(".greetingSpan").text("Witaj " + profile.getName());
    greeting.addClass('greeting').appendTo(".pages").delay(2000).fadeOut(1000, function () {
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



        greeting.addClass('greeting').appendTo(".pages").delay(2000).fadeOut(1000, function () {
            $(this).remove();
        });
    });
}
