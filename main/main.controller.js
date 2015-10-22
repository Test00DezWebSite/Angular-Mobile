(function() {
  'use strict';

  angular
    .module('app.main')
    .controller('MainController', MainController);

  function MainController($scope, common) {
    common.setTitle();
    
    $scope.goToAccount = goToAccount;
    $scope.goToBill = goToBill;
    $scope.goToContactUs = goToContactUs;
    
    function goToAccount() {
      common.changeLocation('/account');
    }
    
    function goToBill() {
      common.changeLocation('/bill');
    }
    
    function goToContactUs() {
      common.changeLocation('/contact-us');      
    }
    
  }

})();
