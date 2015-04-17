angular.module('app.controllers')

.controller('FeedCtrl', function($scope, PostsSrv){

  $scope.posts = PostsSrv.getPosts();

});