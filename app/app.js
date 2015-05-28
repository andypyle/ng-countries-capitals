var app = angular.module('countriesCapitals', ['ngRoute', 'GeonamesApi']);

app.run(function($rootScope, $location, $timeout){
	$rootScope.$on('$routeChangeError', function(){
		$location.path('/error');
	});
});

app.controller('mainCtrl', function($scope){
	
});