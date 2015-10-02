(function() {
  'use strict';

  angular
    .module('app.bill')
    .controller('BillController', BillController);

  function BillController($scope) {
    $scope.title = "My Bill";
  }

})();
