(function() {
  'use strict';

  angular
    .module('app.contact-info')
    .config(config);

  function config($routeProvider) {
    $routeProvider
      .when('/contact-info', {
        controller: 'ContactInfoController',
        templateUrl: 'app/contact-info/contact-info.html'
      })
      .when('/contact-info/billing-address', {
        controller: 'BillingAddressController',
        templateUrl: 'app/contact-info/billing-address.html'
      })
      .when('/contact-info/email-phone', {
        controller: 'EmailPhoneController',
        templateUrl: 'app/contact-info/email-phone.html'
      });
  }

})();
