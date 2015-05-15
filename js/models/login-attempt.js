angular.module('app.models')
  .factory('LoginAttempt', function(restmod) {
    return restmod.model('/login_attempts').mix('HttpAuth');
  });
