(function() {
  'use strict';

  angular
    .module('app.contact-info')
    .controller('ContactInfoController', controller);

  function controller($scope, common, $mdToast) {
    common.setTitle('Update Info');
    $scope.goTo = common.changeLocation;
    $scope.paperlessBilling = false;
    
    $scope.$watch('paperlessBilling', function(oldValue, newValue) {
      if (oldValue === newValue) return;
      
      var action = newValue ? "on" : "off";
      var toast = $mdToast.simple().content('Paperbilling has been turned ' + action + '.');
      $mdToast.show(toast);
    }); 
  }
  
  

})();
