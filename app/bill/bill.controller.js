(function() {
  'use strict';

  angular
    .module('app.bill')
    .controller('BillController', BillController);

  function BillController(common) {
    common.setTitle("My Bill");
  }

})();
