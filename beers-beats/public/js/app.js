var beersBeatsApp = angular.module( 'beersBeats', [ 'ngRoute', 'ngResource', 'ngCookies', 'ngDragDrop'] );

beersBeatsApp.config( [ '$routeProvider',
    function( $routeProvider ) {
        $routeProvider.
        when( '/', { // INITAL PAGE LOAD ONLY
            templateUrl: 'partials/landingView.html',
            controller: 'homeCtrl'
        } ).
        when( '/home', {
            templateUrl: 'partials/searchView.html', 
            controller: 'searchCtrl'
        } ).

        when( '/home?access_token', {

            templateUrl: 'partials/home.html',
            controller: 'homeCtrl'
        } ).
        when( '/search', {
            templateUrl: 'partials/searchView.html',
            controller: 'searchCtrl'
        } ).
        when( '/profile', {
            templateUrl: 'partials/profileView.html',
            controller: 'profileCtrl'
        } ).
        when( '/beer/', {
            templateUrl: 'partials/beerView.html',
            controller: 'beerCtrl'
        } ).
        when( '/playlist', {
            templateUrl: 'partials/spotifyPlaylistView.html',
            controller: 'spotifyPlaylistCtrl'
        } ).
       when( '/selectedBeer/:beerId', {
            templateUrl: 'partials/selectedBeerView.html',
            controller: 'selectedBeerCtrl'
        } ).
        otherwise( {
            redirectTo: '/home'
        } );
    }
] );
