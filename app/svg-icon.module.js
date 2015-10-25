(function() {
  angular
    .module('app.svg-icons', ['ngMaterial'])
	.config(config)

  function config($mdIconProvider) {
    $mdIconProvider    
		.iconSet('action', 'img/svg-sprite-action.svg', 24)
		.iconSet('av', 'img/svg-sprite-av.svg', 24)
		.iconSet('maps', 'img/svg-sprite-maps.svg', 24)
		.iconSet('navigation', 'img/svg-sprite-navigation.svg', 24)
		.iconSet('social', 'img/svg-sprite-social.svg', 24);
  }
})();