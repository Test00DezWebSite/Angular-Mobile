(function() {
  'use strict';

  angular
    .module('app.directives')
    .directive('bsChevron', chevron);

  function chevron() {
    return {
      restrict: 'AE',
      templateUrl: 'directives/chevron.directive.html'
    };
  }

})();
