(function() {
  'use strict';

  angular
    .module('app.contact-info')
    .config(config);

  function config($routeProvider) {
    $routeProvider
      .when('/contact-info', {
        controller: 'ContactInfoController',
        templateUrl: 'contact-info/contact-info.html'
      })
      .when('/contact-info/billing-address', {
        controller: 'BillingAddressController',
        templateUrl: 'contact-info/billing-address.html'
      })
      .when('/contact-info/email-phone', {
        controller: 'EmailPhoneController',
        templateUrl: 'contact-info/email-phone.html'
      });
  }

})();
