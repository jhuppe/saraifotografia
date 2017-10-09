angular.module('photoCollection', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('galeria', {
      url: '/',
      templateUrl: 'views/galeria.html',
      controller: 'galleryCtrl'
    })
    .state('precios', {
      url: '/precios',
      templateUrl: 'views/precios.html',
      controller: 'packagesCtrl'
    })
    .state('biografia', {
      url: '/biografia',
      templateUrl: 'views/biografia.html'
    })
    .state('admin', {
      url: '/admin',
      templateUrl: 'views/admin/admin.html',
      controller: 'adminCtrl',
    })
    .state('profile', {
      url: '/profile',
      templateUrl: 'views/admin/profile.html',
      controller: 'profileCtrl as user'
    })


    $urlRouterProvider.otherwise('/')
  });
