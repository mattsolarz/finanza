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
			when('/group/:groupId', {
				templateUrl: 'views/group.html'
			}).
			when('/group/:groupId/add', {
				templateUrl: 'views/addExpense.html'
			}).
			when('/login', {
				templateUrl: 'views/login.html'
			}).
			when('/register', {
				templateUrl: 'views/register.html'
			}).
			otherwise({
				redirectTo: '/'
			});
	}]);

app.controller('GenericController', ['$scope', '$location', '$routeParams', function($scope, $location, $routeParams) {
	$scope.go = function(path) {
		$location.path(path);
	};

}]);

app.controller('GroupController', ['$scope', '$routeParams', function($scope, $routeParams) {
	$scope.groupId = $routeParams.groupId;
}]);

app.controller('AddExpenseController', ['$scope', '$routeParams', function($scope, $routeParams) {
	$scope.groupId = $routeParams.groupId;
}])
