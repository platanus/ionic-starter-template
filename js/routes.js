angular.module('app')

.config(function($stateProvider, $urlRouterProvider){

  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html"
  })
    .state('app.feed', {
      url: '/feed',
      views: { menuContent: {
        controller: 'FeedCtrl',
        templateUrl: 'templates/app/feed.html'
      }}
    })
    .state('app.turnBlue', {
      url: '/turn-blue',
      views: { menuContent: {
        templateUrl: 'templates/app/turn-blue.html'
      }}
    })
    .state('app.auth', {
      url: '/auth',
      views: { menuContent: {
        controller: 'AuthCtrl',
        templateUrl: 'templates/app/auth.html'
      }}
    })
    .state('app.protected', {
      url: '/protected',
      resolve: {
        currentUser: function($ionicPopup, UsersSrv) {
          var promise = UsersSrv.loggedPromise();
          promise.then(null, function(){
            $ionicPopup.alert({
              title: 'Ups!',
              template: 'No estás autenticado, no puedes acceder a esta página.'
            });
          });
          return promise;
        }
      },
      views: { menuContent: {
        templateUrl: 'templates/app/protected.html'
      }}
    });

  $urlRouterProvider.otherwise('/app/feed');
})