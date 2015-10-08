(function() {
  'use strict';

  angular
    .module('app.main')
    .controller('MainController', MainController);

  function MainController($scope, common) {
    $scope.name = '';
    $scope.message = '';
    $scope.displayMessage = DisplayMessage;
    $scope.clearMessage = ClearMessage;

    common.setTitle('Sentry');


    function DisplayMessage() {
      $scope.message = "Hello, " + $scope.name + "!";
    }

    function ClearMessage() {
      $scope.message = '';
    }
  }

})();
