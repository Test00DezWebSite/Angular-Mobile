(function() {
  'use strict';

  angular
    .module('app', [
      /* Angular Modules */
      'ngRoute',
      /* 3rd Party Vendors */
      'rt.encodeuri',
      /* Components */
      'app.directives',
      'app.filters',
      /* Pages */
      'app.main',
      'app.account',
      'app.bill',
      'app.contact-us'
    ]);

})();
