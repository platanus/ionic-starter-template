angular.module('app.controllers')

.controller('AuthCtrl', function($scope, $ionicLoading, $ionicPopup, UsersSrv){

  $scope.loggedIn = UsersSrv.isLogged;
  $scope.currentUser = function() { return UsersSrv.currentUser };

  $scope.signupExample = function() {
    $ionicLoading.show();
    UsersSrv.signup({
      email: 'example@domain.com',
      password: 'password',
      confirmPassword: 'password'
    }).then(function(){
      $ionicLoading.hide();
    }, function(data){
      $ionicPopup.alert({
        title: 'Error',
        template: JSON.stringify(data)
      });
      $ionicLoading.hide();
    });
  };

  $scope.loginExample = function() {
    $ionicLoading.show();
    UsersSrv.login('example@domain.com', 'password').then(function(){
      $ionicLoading.hide();
    }, function(data){
      $ionicPopup.alert({
        title: 'Error',
        template: JSON.stringify(data)
      });
      $ionicLoading.hide();
    });
  };

  $scope.logout = UsersSrv.logout;

});