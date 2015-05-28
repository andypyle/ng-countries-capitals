app.config(function($locationProvider, $routeProvider){
	

	$routeProvider.when('/', {
		templateUrl : 'home/home.html',
		controller : 'mainCtrl'
	})
	.when('/countries/', {
		templateUrl : 'countries/countries-list.html',
		controller : 'countriesCtrl'
	})
	.when('/countries/:countryCode', {
		templateUrl : 'countries/country-page.html',
		controller : 'countryCtrl',
		resolve: {
			countryCode: function($route){
				var country = $route.current.params.countryCode;
				return country;
			}
		}
	})
	.when('/error', {
		templateUrl : 'errors/error.html'
	})
	.otherwise({
		redirectTo : '/error'
	});

	//$locationProvider.hashPrefix('!');
	$locationProvider.html5Mode(false);
});