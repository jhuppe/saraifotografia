angular.module('photoCollection').service('galleryService', function($http) {

  this.getPhotos = function() {
    return $http({
      method: 'GET',
      url: '/api/photos'
    }).then(function(response) {
      return response.data;
    })

  }

})
