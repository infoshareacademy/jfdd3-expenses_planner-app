
var logIn = $('#g-signin2');
var logOut = $('#customBtnOut');

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
    var greeting = $('<div>').append($('<span>')).addClass(".greetingSpan").text("Witaj " + profile.getName());
    greeting.addClass('greeting').appendTo(".pages").delay(2000).fadeOut(1000, function () {
    $(this).remove();
    });
    logIn.fadeOut(500);
    logOut.fadeIn(500)
}

function signOut(googleUser) {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
        var greeting = $('<div>').append($('<span>')).addClass(".greetingSpan").text("Żegnaj ");
        greeting.addClass('greeting greetingAnimation').appendTo(".pages").delay(2000).fadeOut(1000, function () {
            $(this).remove();
        });
        logIn.fadeOut(500);
        logOut.fadeIn(500)
    });
}