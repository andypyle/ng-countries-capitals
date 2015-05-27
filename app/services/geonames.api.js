angular.module('GeonamesApi', [])

	.constant('GN_URL_COUNTRIES','http://api.geonames.org/countryInfoJSON?username=andypyle')
	.constant('GN_URL_NEIGHBORS','http://api.geonames.org/neighboursJSON?username=andypyle&country={{ countryCode }}')
	.constant('GN_URL_SEARCH_CAPITAL','http://api.geonames.org/searchJSON?username=andypyle&country={{ countryCode }}&featureCode=PPLC')

	.factory('countriesList', function($http, GN_URL_COUNTRIES){
		return function(){
			return $http({
				cache: true,
				method: 'GET',
				url: GN_URL_COUNTRIES
			});
		}
	})

	.factory('countryNeighbors', function($http, $interpolate, GN_URL_NEIGHBORS){
		return function(cc){
			var urlNeighbors = $interpolate(GN_URL_NEIGHBORS)({
				countryCode : cc
			});
			return $http({
				cache: true,
				method: 'GET',
				url: urlNeighbors
			});
		}
	})

	.factory('countryCapital', function($http, $interpolate, GN_URL_SEARCH_CAPITAL){
		return function(cc){
			var url = $interpolate(GN_URL_SEARCH_CAPITAL)({
				countryCode : cc
			});
			return $http({
				cache: true,
				method: 'GET',
				url: url
			});
		}
	});