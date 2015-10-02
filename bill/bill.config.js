(function() {
  'use strict';

  angular
    .module('app.bill')
    .config(config);

  function config($routeProvider) {
    $routeProvider
      .when('/bill', {
        controller: 'BillController',
        templateUrl: 'bill/bill.html'
      });
  }

})();
