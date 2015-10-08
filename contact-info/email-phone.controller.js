(function() {
  'use strict';

  angular
    .module('app.contact-info')
    .controller('EmailPhoneController', controller);

  function controller($scope, common) {
    common.setTitle('Update Info');
    $scope.goBack = common.goBack;
  }

})();
