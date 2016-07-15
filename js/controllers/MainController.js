app.controller('MainController', 'places', [ '$scope', 'places', function($scope) {
	$scope.mapCenter = { lat: 40.741934, lng: -74.004897, zoom: 17 };
	
	places.success(function(data) {
		
	})
}]);