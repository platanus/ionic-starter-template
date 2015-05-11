angular.module('app.controllers')

.controller('FeedCtrl', function($scope, PostsSrv, UsersSrv){

  $scope.loggedIn = UsersSrv.isLogged;
  $scope.posts = PostsSrv.getPosts();

});