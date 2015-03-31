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
				templateUrl: 'views/groupList.html',
			}).
			when('/group', {
				templateUrl: 'views/group.html'
			});
	}]);

app.controller('GenericController', ['$scope', '$location', function($scope,$location) {
	$scope.go = function(path) {
		$location.path(path);
	};
}]);
