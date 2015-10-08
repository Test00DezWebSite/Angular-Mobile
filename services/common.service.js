(function() {
  angular
    .module('app.services')
    .factory('common', factory);

  function factory($window, $location, $rootScope) {

    return {
      goBack: goBack,
      setTitle: setTitle
    }

    function goBack() {
      $window.history.back();
    }

    function setTitle(title) {
      title = title || 'Sentry';
      $rootScope.title = title;
    }
  }
})();
