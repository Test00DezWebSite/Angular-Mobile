(function() {
  'use strict';

  angular
    .module('app.contact-us')
    .controller('ContactUsController', ContactUsController);

  function ContactUsController($scope, common, CompanyFax, CompanyPhone, CompanyEmail) {
    common.setTitle("Contact Us");
    $scope.accountNumber = "24680";
    $scope.phone = CompanyPhone;
    $scope.email = CompanyEmail;
  }

})();
