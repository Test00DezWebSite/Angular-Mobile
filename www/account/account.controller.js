(function() {
  'use strict';

  angular
    .module('app.account')
    .controller('AccountController', AccountController);

  function AccountController($scope) {
    $scope.title = "My Account";
  }

})();
