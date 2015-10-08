(function() {
  'use strict';

  angular
    .module('app.contact-info')
    .controller('ContactInfoController', controller);

  function controller(common) {
    common.setTitle('Update Info');
  }

})();
