beersBeatsApp.controller('beerCtrl', function($scope, model){

	$scope.beers = function(){
		return model.getSelectedBeers();
	}

	//Show more or less info-text for a beer
	$scope.toggleText = function(id){
		model.toggleBeerText(id);
	}

	//Remove a beer from beerBag
	$scope.remove = function(id){
		model.deselectBeer(id);
	}
});

