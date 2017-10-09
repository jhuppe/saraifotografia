angular.module('photoCollection').directive('photoModal', function(){
  return {
    templateUrl: 'views/photoModal.html',
    scope: {
      image: '=',
      toggle: '&'
    }
  }
})
