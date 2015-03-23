var app = angular.module('finanza', [
	'ngMaterial',
	'ngResource'
]).config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('light-blue')
    .accentPalette('red');
});