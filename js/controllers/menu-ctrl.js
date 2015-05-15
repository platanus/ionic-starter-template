angular.module('app.controllers')

.controller('MenuCtrl', function($scope, UsersSrv){

  $scope.loggedIn = UsersSrv.isLogged;
  $scope.currentUser = function() { return UsersSrv.currentUser };
  $scope.logout = UsersSrv.logout;

});