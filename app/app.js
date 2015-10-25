(function() {
  'use strict';

  angular
    .module('app', [
      /* Angular Modules */
      'ngRoute',
      //'ngTouch',
      'ngMessages',
      'ngAnimate',
      'ngAria',
      'app.svg-icons',
      /* 3rd Party Vendors */
      //'rt.encodeuri',
      //'ngMaterial',
      /* Components */
      'app.services',
      'app.directives',
      'app.filters',
      'app.constants',
      /* Partials */
      'app.nav',
      /* Pages */
      'app.main',
      'app.account',
      'app.bill',
      'app.contact-us',
      'app.contact-info'
    ]);

})();
