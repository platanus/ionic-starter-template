angular.module('app.services')

.factory('UsersSrv', function($q, AuthSrv, User, LoginAttempt, localStorageService){
  var CURRENT_USER_LS_KEY = 'app.currentUser'; // localStorage current user data key

  var service = {
    // Stores accessible current user data
    currentUser: {},

    isLogged: function() {
      return AuthSrv.isLogged();
    },

    // Returns user's login status as promise for use with router
    loggedPromise: function() {
      var deferred  = $q.defer();
      if ( service.isLogged() ) {
        deferred.resolve(service.currentUser);
      } else {
        deferred.reject();
      }
      return deferred.promise;
    },

    // Send POST request to users. If successful, also call service.login()
    signup: function(userData) {
      var deferred = $q.defer();

      User.$create({ mobile_user: userData }).$then(function(signupData){
        service.login(userData.email, userData.password).then(function(loginData){
          deferred.resolve(loginData); // Signup and login successful
        }, function(loginData){
          deferred.reject(loginData.$response.data); // Signup successful, login failed
        });
      }, function(signupData){
        deferred.reject(signupData.$response.data); // Signup unsuccessful
      });

      return deferred.promise;
    },

    // Send POST request to login_attempts. If sucessful, store data in AuthSrv and call setCurrentUser(), service.fetch()
    login: function(email, password) {
      var deferred = $q.defer();

      LoginAttempt.$create({email: email, password: password}).$then(function(data){
        AuthSrv.store(data);
        setCurrentUser(data);
        deferred.resolve(data); // Login successful
      }, function(data){
        deferred.reject(data.$response.data); // Login unsuccesful
      });

      return deferred.promise;
    },

    // Clears AuthSrv data, calls clearCurrentUser()
    logout: function(){
      clearCurrentUser();
      AuthSrv.clear();
    }
  };

  // Loads data into service.currentUser from localStorage
  var loadCurrentUser = function() {
    var user = localStorageService.get(CURRENT_USER_LS_KEY);
    if ( user ) service.currentUser = user;
  };

  // Sets data into service.currentUser and persists it in localStorage
  var setCurrentUser = function(data) {
    service.currentUser = data;
    localStorageService.set(CURRENT_USER_LS_KEY, data);
  };

  // Clears data from service.currentUser and localStorage
  var clearCurrentUser = function() {
    service.currentUser = {};
    localStorageService.set(CURRENT_USER_LS_KEY, {});
  };

  // call loadCurrentUser() and service.fetch() on service init
  loadCurrentUser();

  return service;
});