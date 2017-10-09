angular.module('photoCollection').controller('adminCtrl', function($scope, packagesService, adminService){


  $scope.getPackages = function () {
    packagesService.getPackages()
      .then( function (response){
        $scope.packages = response;
      })
  }

  $scope.getPackages();

  $scope.updatePackage = function (package) {
    adminService.updatePackage(package)
    package.edit = !package.edit;
  };

  $scope.addPhoto = function(photo) {
    adminService.addPhoto(photo)
  }

})
