angular.module('app.controllers')

.controller('AuthCtrl', function($scope, UsersSrv){

  $scope.loggedIn = UsersSrv.isLogged;
  $scope.currentUser = function() { return UsersSrv.currentUser };

  $scope.signupExample = function() {
    UsersSrv.signup({
      email: 'example@domain.com',
      password: 'password',
      confirmPassword: 'password'
    });
  };

  $scope.loginExample = function() {
    UsersSrv.login('example@domain.com', 'password');
  };

  $scope.logout = UsersSrv.logout;

});