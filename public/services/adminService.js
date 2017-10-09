angular.module('photoCollection').service('adminService', function($http) {

  this.updatePackage = function(package) {
    return $http({
      data: package,
      method: 'PUT',
      url: '/api/packages'
    })
  }

  this.addPhoto = function(photo) {
    return $http({
      data: photo,
      method: 'PUT',
      url: '/api/photos'
    }).then(function(response) {
    })
  }

})
