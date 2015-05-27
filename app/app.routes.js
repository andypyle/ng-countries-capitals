app.config(function($locationProvider, $routeProvider){
	$locationProvider.hashPrefix('!')

	$routeProvider.when('/', {
		templateUrl : 'home/home.html',
		controller : 'mainCtrl'
	})
	.when('/countries', {
		templateUrl : 'countries/countries-list.html',
		controller : 'countriesCtrl'
	})
	.when('/countries/:country', {
		templateUrl : 'countries/country-page.html',
		controller : 'countriesCtrl',
		resolve: {
			country: function($route){
				var country = $route.current.params.country;
				return country;
			}
		}
	})
	.otherwise({
		redirectTo : '/'
	});

	$locationProvider.html5Mode(true);
});