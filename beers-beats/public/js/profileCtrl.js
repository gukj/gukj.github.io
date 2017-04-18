beersBeatsApp.controller('profileCtrl', function($scope, model, $sce){
  
  var _this = this;
  this.getProfile = model.userProfile.get({},function(data){
    $scope.status = "";
    $scope.profile = data;
  },function(data){
    $scope.status = "You must login to see your profile";
    _this.openError();
  });

  //Opens error message on screen
  _this.openError = function(){
    angular.element('#errorModal').modal('show');
  }

  this.getProfile;

});
