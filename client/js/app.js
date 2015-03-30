var app = angular.module('finanza', [
	'ngMaterial',
	'ngRoute',
	'ngResource'
]).config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('light-blue')
    .accentPalette('red');
});

app.config(['$routeProvider', 
	function($routeProvider) {
		$routeProvider.
			when('/', {
				templateUrl: 'views/groups.html',
			});
	}]);