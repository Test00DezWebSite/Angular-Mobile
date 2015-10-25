(function() {
  'use strict';

  angular
    .module('app.account')
    .controller('AccountController', AccountController);

  function AccountController($scope, common) {
    common.setTitle("My Account");
    
    $scope.goToContactInfo = goToContactInfo;
    
    function goToContactInfo () {
       common.changeLocation('/contact-info');  
    }
  }

})();
