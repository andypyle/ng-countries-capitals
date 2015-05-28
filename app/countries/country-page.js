app.controller('countryCtrl', function($scope, countryCode, countryNeighbors, countryCapital, countriesList){

	$scope.loading = [];

	countryNeighbors(countryCode)
		.success(function(countryInfo){
			$scope.neighborsCount = countryInfo.totalResultsCount;
			$scope.neighbors = countryInfo.geonames;
			$scope.loading.push(true);
		});

	countryCapital(countryCode)
		.success(function(countryCap){
			$scope.capital = countryCap.geonames[0];
			$scope.loading.push(true);
		});

	countriesList(countryCode)
		.success(function(countryData){
			$scope.country = countryData.geonames[0];
		});
});