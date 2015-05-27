app.controller('countriesCtrl', function($scope, countriesList, countryNeighbors, countryCapital){
	countriesList()
		.success(function(countries){
			$scope.countryList = countries.geonames;
		});
});