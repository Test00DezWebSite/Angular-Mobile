(function() {
  angular
    .module('app.nav', [])
    .directive('navbar', navbar);

  function navbar() {
    return {
      restrict: 'E',
      templateUrl: 'app/navbar/navbar.html',
      controller: controller
    }
  }

  function controller($scope, $route, common, $mdSidenav) {
    $scope.goBack = common.goBack;
    $scope.isHomeScreen = '/' !== $route.current.$$route.originalPath;
    $scope.openSideNav = openSideNav;
    
    $scope.$on('$routeChangeStart', routeChanged);

    function routeChanged(angularEvent, next, current) {
      if (next.$$route) {
        $scope.isHomeScreen = '/' !== next.$$route.originalPath;
      }
    }
    
    function openSideNav() {
      $mdSidenav('right').toggle();
    }
  }

})();
