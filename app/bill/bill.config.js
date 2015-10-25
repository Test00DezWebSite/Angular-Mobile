(function() {
  'use strict';

  angular
    .module('app.bill')
    .config(config);

  function config($routeProvider) {
    $routeProvider
      .when('/bill', {
        controller: 'BillController',
        templateUrl: 'app/bill/bill.html'
      });
  }

})();
