(function() {
  'use strict';

  angular
    .module('app.main')
    .config(config);

  function config($routeProvider) {
    $routeProvider
      .when('/', {
        controller: 'MainController',
        templateUrl: 'main/main.html'
      });
  }

})();
