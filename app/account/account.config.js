(function() {
  'use strict';

  angular
    .module('app.account')
    .config(config);

  function config($routeProvider) {
    $routeProvider
      .when('/account', {
        controller: 'AccountController',
        templateUrl: 'app/account/account.html'
      });
  }

})();
