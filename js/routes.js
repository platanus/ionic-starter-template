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
    });

  $urlRouterProvider.otherwise('/app/feed');
})