(function() {
  'use strict';

  angular
    .module('app.contact-us')
    .config(config);

  function config($routeProvider) {
    $routeProvider
      .when('/contact-us', {
        controller: 'ContactUsController',
        templateUrl: 'app/contact-us/contact-us.html'
      });
  }

})();
