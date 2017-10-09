angular.module('photoCollection').controller('galleryCtrl', function($scope, galleryService) {
  $scope.getPhotos = function () {
    galleryService.getPhotos()
      .then( function (response){
        $scope.photos = response;
      })
  }
  $scope.getPhotos()

  $scope.displayModal = function (image) {
    console.log('image', image)
    $scope.toggleModal()
    $scope.image = image;
  }

  $scope.toggleModal = function () {
    console.log('running')
    $scope.showModal = !$scope.showModal;
  }
})
