(function() {
  'use strict';

  angular
    .module('app.contact-us')
    .controller('ContactUsController', ContactUsController);

  function ContactUsController($scope) {
    $scope.title = "Contact Us";
    $scope.accountNumber = "24680";
    $scope.tollFreePhoneNumber = "7134015760";
  }

})();
