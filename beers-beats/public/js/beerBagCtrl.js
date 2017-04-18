beersBeatsApp.controller('beerBagCtrl', function($scope, model){

  var target = "";
  var source = "";
  $scope.beerBag = model.getSelectedBeersAndValue();

  /* -- Drag-n-drop --*/
  $scope.onDrop = function(){
    model.selectBeer(source);

  };

  $scope.dropValidate = function(t, s) {
    target = t;
    source = s;
    return (target !== source && target == 'beerBag');
  };
  /* -- END Drag-n-drop -- */

  //Remove a beer from beerBag
  $scope.removeBeer = function(beerID) {
    model.deselectBeer(beerID);
  }


  //Removes ALL beer with id = beerID from beerBag
  $scope.deleteBeer = function(beerID) {
    model.deleteBeer(beerID);
  }

  //Returns a number of total beer amount
  $scope.counting = function() {
    if (model.countBeersinBag() === 0){
      $scope.emptyMsg = "Drag n' drop ze beer here!";
    } else{
      $scope.emptyMsg = "";
    }
    return model.countBeersinBag();
  }

  $scope.hideMe = function() {
    return model.countBeersinBag() < 0;

  }
 

});