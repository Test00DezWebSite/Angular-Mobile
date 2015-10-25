(function() {
  'use strict';

  angular
    .module('app.main')
    .config(config);

  function config($routeProvider) {
    $routeProvider
      .when('/', {
        controller: 'MainController',
        templateUrl: 'app/main/main.html'
      });
  }

})();
