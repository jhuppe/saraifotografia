angular.module('photoCollection').service('packagesService', function($http) {

  this.getPackages = function (package) {

    return $http ({
      method: 'GET',
      url: '/api/packages'
    }).then(function(response) {
      return response.data;
    })

  }
})
