app.controller('countriesCtrl', function($scope, $q, countriesList, countryNeighbors, countryCapital){
	
	$scope.loading = true;

	countriesList()
		.success(function(countries){
			$scope.loading = false;
			$scope.countryList = countries.geonames;
		});
});