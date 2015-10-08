(function() {
  'use strict';

  angular
    .module('app.account')
    .controller('AccountController', AccountController);

  function AccountController(common) {
    common.setTitle("My Account");
  }

})();
