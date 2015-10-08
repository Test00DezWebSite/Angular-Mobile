(function() {
  'use strict';

  angular
    .module('app.contact-info')
    .controller('BillingAddressController', controller);

  function controller($scope, common) {
    common.setTitle('Update Info');
    $scope.goBack = common.goBack;
  }

})();
