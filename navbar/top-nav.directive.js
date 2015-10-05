angular
  .module('app.top-nav', [])
  .directive('topNav', topNav);

function topNav() {
  return {
    restrict: 'E',
    templateUrl: 'navbar/top-nav.html'
  }
}
