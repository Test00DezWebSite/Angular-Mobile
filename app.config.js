(function() {
  'use strict';

  angular
    .module('app')
    .config(config);

  function config($routeProvider, $mdThemingProvider) {
    $routeProvider
      .otherwise('/');
      
    // $mdThemingProvider
    //   .theme('default')
    //   .primaryPalette('blue')
    //   .accentPalette('amber')
    //   .backgroundPalette('blue-grey');
  }

})();
