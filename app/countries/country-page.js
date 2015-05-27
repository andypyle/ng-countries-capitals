app.controller('countryCtrl', function($scope, countryCode, countryNeighbors, countryCapital){

	countryNeighbors(countryCode)
		.success(function(countryInfo){
			$scope.neighborsCount = countryInfo.totalResultsCount;
			$scope.neighbors = countryInfo.geonames;
		});

	countryCapital(countryCode)
		.success(function(countryCap){
			$scope.capital = countryCap.geonames[0];
		});
});