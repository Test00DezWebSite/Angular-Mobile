(function() {
  'use strict';

  angular
    .module('app', [
      /* Angular Modules */
      'ngRoute',
      'ngAnimate',
      /* 3rd Party Vendors */
      'rt.encodeuri',
      'ui.materialize',
      /* Components */
      'app.services',
      'app.directives',
      'app.filters',
      'app.constants',
      /* Partials */
      'app.top-nav',
      /* Pages */
      'app.main',
      'app.account',
      'app.bill',
      'app.contact-us',
      'app.contact-info'
    ]);

})();
