(function() {
  'use strict';

  angular
    .module('app.directives')
    .directive('mailTo', mailTo);

  function mailTo() {
    return {
      controller: controller,
      restrict: 'E',
      templateUrl: 'app/directives/mail-to.directive.html'
    };
  }

  function controller($scope) {
    $scope.linkText = "Contact Us";
    $scope.to = "contactus@company.com";
    $scope.subject = "Question for Account # " + $scope.accountNumber;

    $scope.queryString = assembleQueryString();

    function assembleQueryString() {
      var queryString = "";
      if (angular.isDefined($scope.subject) && angular.isString($scope.subject)) {
        queryString += "subject=" + $scope.subject;
      }

      queryString = queryString.replace(' ', '%20');

      return queryString;
    }
  }

})();
