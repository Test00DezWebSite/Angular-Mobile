(function() {
  angular
    .module('app.top-nav', [])
    .directive('topNav', topNav);

  function topNav() {
    return {
      restrict: 'E',
      templateUrl: 'navbar/top-nav.html',
      controller: controller
    }
  }

  function controller($scope, $route, common) {
    $scope.goBack = common.goBack;
    $scope.isHomeScreen = '/' !== $route.current.$$route.originalPath;

    $scope.$on('$routeChangeStart', routeChanged);

    function routeChanged(angularEvent, next, current) {
      if (next.$$route) {
        $scope.isHomeScreen = '/' !== next.$$route.originalPath;
      }
    }
  }

})();
