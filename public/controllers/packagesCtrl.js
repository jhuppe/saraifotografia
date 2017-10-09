angular.module('photoCollection').controller('packagesCtrl', function($scope, packagesService){


  $scope.getPackages = function () {
    packagesService.getPackages()
      .then( function (response){
        $scope.packages = response;
      })
  }

  $scope.getPackages()

})
