beersBeatsApp.controller('spotifyPlaylistCtrl', function($scope, model, $sce){

  var creator = model.getCreatorID();
  var pID = model.getPlaylistID();

  if (pID == undefined){ //If we do not have any beers selected in beerBag
    $scope.spotifyModule = "";
    var message = "Hey, your Beerbag is empty! You can't listen to music without ze beer!" + '<br><br> <a href="#!/search/" class="btn btn-sm btn-primary">Go and get zum beers!</a>';
    $scope.status = $sce.trustAsHtml(message);

  } else {
    $scope.status = 'Here is your generated beerified playlist, only for you! Enjoy!';
    var spotifyURL = '<iframe src="https://embed.spotify.com/?uri=spotify%3Auser%3A' + creator + '%3Aplaylist%3A' + pID + '&theme=white" width="1000" height="550" frameborder="0" allowtransparency="true"></iframe>';
    $scope.spotifyModule = $sce.trustAsHtml(spotifyURL);
  }


});
