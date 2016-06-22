function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
    var greeting = $('<div>').text("Witaj " + profile.getName());
    var logIn = $('.g-signin2');
    greeting.addClass('greeting greetingAnimation').appendTo(".pages").delay(2000).fadeOut(1000, function () {
    $(this).remove();
    });
    logIn.fadeOut(1000, function () {
        $(this).remove()});
}

var onSignOut = function() {
    $('.g-signout').click(signOut());
};

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
    });
}